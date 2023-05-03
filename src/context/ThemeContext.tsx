import React, {
  useCallback,
  ReactNode,
  createContext,
  useState,
  useMemo,
  useEffect,
} from "react";
import { darkTheme } from "../styles/theme";

export interface IThemeContext {
  isDarkMode: boolean;
  toogleTheme: () => void;
}

export const ThemeContext = createContext({} as IThemeContext);

interface IThemeContextProps {
  children: ReactNode;
}

export function ThemeContextProvider({ children }: IThemeContextProps) {
  const [theme, setTheme] = useState<"dark" | "light">(() => {
    return localStorage.getItem("theme") === "dark" ? "dark" : "light";
  });

  const isDarkMode = useMemo(() => theme === "dark", [theme]);

  useEffect(() => {
    const documentElementClassList = document?.documentElement?.classList;
    if (theme === "dark") {
      documentElementClassList.add(darkTheme);
    } else {
      documentElementClassList.remove(darkTheme);
    }
    console.log(theme);
  }, [theme]);

  const toogleTheme = useCallback(() => {
    setTheme((currentTheme) => {
      const futureTheme = currentTheme === "dark" ? "light" : "dark";
      localStorage.setItem("theme", futureTheme);
      return futureTheme;
    });
  }, []);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toogleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
