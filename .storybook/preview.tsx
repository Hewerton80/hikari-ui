import { globalStyles } from "../src/styles/globalStyles";
import { darkTheme } from "../src/styles/theme";
// import { useDarkMode } from "storybook-dark-mode";
import { HikariProviders } from "../src/context";
import type { Preview } from "@storybook/react";

import "./style.css";
import "../src/styles/global.css";
import React from "react";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
      // darkMode: {
      //   current: "light",
      // },
      // darkMode: {
      //   defaultValue: true, // Enable dark mode by default on all stories
      // },
    },
    layout: "centered",
  },
  globalTypes: {
    darkMode: {
      defaultValue: true, // Enable dark mode by default on all stories
    },
    // Optional (Default: 'dark')
    className: {
      defaultValue: "", // Set your custom dark mode class name
    },
  },
};

const App = (Story) => {
  globalStyles();

  // if (useDarkMode()) {
  //   document.documentElement.classList.add(darkTheme);
  // } else {
  //   document.documentElement.classList.remove(darkTheme);
  // }

  return (
    <HikariProviders>
      <Story />
    </HikariProviders>
  );
};

export const decorators = [App];
export default preview;
