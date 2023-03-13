import { rem } from "polished";
import { createGlobalStyle, css } from "styled-components";
import { colors } from "./colors";
import { globalCss } from "./theme";

export const GlobalStyle = createGlobalStyle`

  body {
    ${({ theme }) => css`
      color: ${theme.isDarkMode ? colors.light : colors.dark};
      background-color: ${theme.isDarkMode ? colors["dark-body"] : colors.body};
    `}
  }
`;

export const globalStyles = globalCss({
  "@import": `url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap')`,
  "*": { margin: 0, padding: 0, boxSizing: "border-box" },
  body: {
    fontFamily: `"Poppins", "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif`,
    text: "base",
  },
  a: { textDecoration: "none" },
  ul: { listStyle: "none" },
});
