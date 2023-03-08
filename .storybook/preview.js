import { GlobalStyle } from "../src/styles/globalStyles";
// import { withThemesProvider } from "storybook-addon-styled-component-theme";
// import { ThemeProvider } from "styled-components";
import { useDarkMode } from "storybook-dark-mode";

import { themes } from "@storybook/theming";
import { ThemeContextProvider } from "../src/context/ThemeContext";
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
    // darkMode: {
    //   // Set the initial theme
    //   current: 'light',
    // },
  },
  layout: "centered",
  darkMode: {
    // Override the default dark theme
    dark: { ...themes.dark },
    // Override the default light theme
    light: { ...themes.normal },
  },
};

// const theme1 = {
//   main: "mediumseagreen",
// };

// const theme2 = {
//   main: "mediumseagreen1454",
// };

// const themes = [theme1, theme2];
// addDecorator(withThemesProvider(themes), ThemeProvider);

const WithGlobalStyle = (Story) => (
  <ThemeContextProvider theme={useDarkMode() ? "dark" : "light"}>
    <GlobalStyle />
    <Story />
  </ThemeContextProvider>
);

export const decorators = [WithGlobalStyle];
