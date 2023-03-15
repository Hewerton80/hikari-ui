import { globalStyles } from "../src/styles/globalStyles";
import { darkTheme, lightTheme } from "../src/styles/theme";
import { ThemeContextProvider } from "../src/context/ThemeContext";
import { useDarkMode } from "storybook-dark-mode";

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
  globalStyles();

  if (useDarkMode()) {
    document.documentElement.classList.add(darkTheme);
  } else {
    document.documentElement.classList.remove(darkTheme);
  }

  return (
    // <ThemeContextProvider>
     
        <Story />
    
    // </ThemeContextProvider>
  );
};

export const decorators = [App];
