import { rem, rgba } from "polished";
import { colors } from "../../styles/colors";
import { css } from "styled-components";
import { ring } from "./ring";

export const formTextStyle = css`
  ${({ theme }) => css`
    padding: ${rem(14)} ${rem(22)};
    color: ${theme.isDarkMode ? colors.light : colors.dark};
    width: 100%;
    border: 1px solid
      ${theme.isDarkMode ? rgba(colors.white, 0.1) : colors["gray-border"]};
    font-size: ${rem(14)};
    border-radius: ${rem(2)};
    outline: none;
    background-color: ${colors.transparent};
    transition: all ease 0.3s;
    &:not(:disabled) {
      &:focus {
        ${ring(colors.info)}
      }
    }
  `}
`;
