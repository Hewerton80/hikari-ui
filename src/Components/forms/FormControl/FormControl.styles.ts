import { rem } from "polished";
import { colors } from "../../../styles/colors";
import styled, { css } from "styled-components";
import { addClasseNamePrefix } from "../../../utils/addClasseNamePrefix";
import { ring } from "../../shared/ring";

type VariantStyle = "success" | "danger" | "warning";

type AvaliablesVariantColorType = {
  [Property in VariantStyle]: string;
};

export interface ConteinerProps {
  state?: VariantStyle;
  hasFeedback?: boolean;
}

export interface ContainerLabelProps {
  required?: boolean;
}

const avaliablesVariantColors: AvaliablesVariantColorType = {
  danger: colors.danger,
  success: colors.success,
  warning: colors.warning,
};

export const Container = styled.div<ConteinerProps>`
  display: flex;
  flex-direction: column;
  ${({ state, hasFeedback }) => {
    const stateColor = avaliablesVariantColors[state];
    return (
      hasFeedback &&
      css`
        .${addClasseNamePrefix("feedback")} {
          font-size: ${rem(12)};
          margin-top: ${rem(8)};
          color: ${stateColor};
        }
        .${addClasseNamePrefix("input")}, .${addClasseNamePrefix("textarea")} {
          border-color: ${stateColor};
          &:not(:disabled) {
            &:focus {
              ${ring(stateColor)}
            }
          }
        }
      `
    );
  }}
`;

export const ContainerLabel = styled.label<ContainerLabelProps>`
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
