import { rem } from "polished";
import { createGlobalStyle, css } from "styled-components";
import { colors } from "./colors";
import { globalCss } from "@stitches/core";

export const GlobalStyle = createGlobalStyle`

  /* @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  } */
  body {
    /* font-family: "Poppins", "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: ${rem(16)};
    line-height: ${rem(24)}; */
    ${({ theme }) => css`
      color: ${theme.isDarkMode ? colors.light : colors.dark};
      background-color: ${theme.isDarkMode ? colors["dark-body"] : colors.body};
    `}
  }
  a{
    text-decoration:none;
  }
  ul {
    list-style:none;
  }

`;

export const globalStyles = globalCss({
  "@import": `url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap')`,
  "*": { margin: 0, padding: 0, boxSizing: "border-box" },
  body: {
    fontFamily: `"Poppins", "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif`,
    fontSize: rem(16),
    lineHeight: rem(24),
  },
  a: { textDecoration: "none" },
  ul: { listStyle: "none" },
});
