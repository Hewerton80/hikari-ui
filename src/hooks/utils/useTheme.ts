import { useContext } from "react";
import { ThemeContext, IThemeContext } from "../../context/ThemeContext";

export function useTheme(): IThemeContext {
  return useContext(ThemeContext);
}
