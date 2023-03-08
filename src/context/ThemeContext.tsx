import React from "react";
import { ThemeProvider } from "styled-components";

type AvaliablesTheme = "dark" | "light";

interface IThemeContext {
  theme: AvaliablesTheme;
}

export const ThemeContext = React.createContext({} as IThemeContext);

interface IThemeContextProps {
  children: React.ReactNode;
  theme?: AvaliablesTheme;
}

export function ThemeContextProvider({
  children,
  theme = "light",
}: IThemeContextProps) {
  //   const [theme, setTheme] = React.useState<AvaliablesTheme>("light");

  //   React.useEffect(() => {
  //     if (localStorage.getItem("theme") === "dark") {
  //       setTheme("dark");
  //     }
  //     localStorage.setItem("theme", "dark");
  //   }, []);

  //   React.useEffect(() => {
  //     // const isDarkModeByOperatingSystemPreference = window.matchMedia(
  //     //   '(prefers-color-scheme: dark)'
  //     // ).matches
  //     console.log("theme: ", theme);
  //     if (theme === "dark") {
  //       document.documentElement.classList.add("dark");
  //       localStorage.setItem("theme", "dark");
  //     } else {
  //       document.documentElement.classList.remove("dark");
  //       localStorage.setItem("theme", "light");
  //     }
  //   }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme }}>
      <ThemeProvider theme={{ isDarkMode: theme === "dark" }}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
