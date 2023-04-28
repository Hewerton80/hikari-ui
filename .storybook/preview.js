import { darkTheme } from "../src/styles/theme";
import { useDarkMode } from "storybook-dark-mode";
import { HikariProviders } from "../src/context";
import "./style.css";

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

const App = (Story) => {
  if (useDarkMode()) {
    document.documentElement.classList.add(darkTheme);
  } else {
    document.documentElement.classList.remove(darkTheme);
  }

  return (
    <HikariProviders>
      <Story />
    </HikariProviders>
  );
};

export const decorators = [App];
