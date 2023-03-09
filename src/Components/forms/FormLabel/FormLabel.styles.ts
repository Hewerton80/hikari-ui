import { rem } from "polished";
import { colors } from "../../../styles/colors";
import styled, { css } from "styled-components";

export interface ContainerProps {
  required?: boolean;
}

export const Container = styled.label<ContainerProps>`
  ${({ required }) =>
    css`
      font-size: ${rem(14)};
      margin-bottom: ${rem(8)};
      ${required &&
      css`
        &::after {
          content: "*";
          color: ${colors.danger};
        }
      `}
    `}
`;