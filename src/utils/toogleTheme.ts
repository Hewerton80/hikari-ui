import { darkTheme } from "../styles/theme";

export const toogleTheme = () => {
  document?.documentElement?.classList?.toggle(darkTheme);
};
