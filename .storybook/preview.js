import { globalStyles } from "../src/styles/globalStyles";
// import { withThemesProvider } from "storybook-addon-styled-component-theme";
// import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../src/styles/theme";
// import { themes } from "@storybook/theming";
import { ThemeContextProvider } from "../src/context/ThemeContext";
import { useDarkMode } from "storybook-dark-mode";
import { useEffect } from "react";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
    darkMode: {
      // Set the initial theme
      current: "light",
    },
  },
  layout: "centered",
};

// const theme1 = {
//   main: "mediumseagreen",
// };

// const theme2 = {
//   main: "mediumseagreen1454",
// };

// const themes = [theme1, theme2];
// addDecorator(withThemesProvider(themes), ThemeProvider);

const App = (Story) => {
  globalStyles();

  // useEffect(() => {
  // const isDarkModeByOperatingSystemPreference = window.matchMedia(
  //   '(prefers-color-scheme: dark)'
  // ).matches
  if (useDarkMode()) {
    document.documentElement.classList.add(darkTheme);
    // localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.classList.remove(darkTheme);
    // localStorage.setItem("theme", "light");
  }
  // }, [useDarkMode]);

  return (
    <ThemeContextProvider>
      {/* <div className={classNames(useDarkMode() && darkTheme)}> */}
      <>
        <Story />
      </>
      {/* </div> */}
    </ThemeContextProvider>
  );
};

export const decorators = [App];
