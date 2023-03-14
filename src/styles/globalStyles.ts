import { colors } from "./colors";
import { globalCss, darkTheme } from "./theme";

export const globalStyles = globalCss({
  "@import": `url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap')`,
  "*": { margin: 0, padding: 0, boxSizing: "border-box" },
  body: {
    fontFamily: `"Poppins", "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif`,
    text: "base",
    [`.${darkTheme} &`]: {
      backgroundColor: colors["dark-body"],
    },
  },
  a: { textDecoration: "none" },
  ul: { listStyle: "none" },
});
