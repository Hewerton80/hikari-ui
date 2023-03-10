import { rgba, darken, rem } from "polished";
import { colors } from "../../../styles/colors";
import styled, { css } from "styled-components";
import { ring } from "../../helpers/ring";
import { addClasseNamePrefix } from "../../../utils/addClasseNamePrefix";

type VariantStyle =
  | "primary"
  | "secondary"
  | "success"
  | "info"
  | "dark"
  | "danger"
  | "warning";

type ButtonVariantStyle = "contained" | "outlined" | "texted";
interface IButtonCssProperties {
  bgColor: string;
  hoverBgColor: string;
  borderColor: string;
  color: string;
  hoverColor: string;
  spinnerColor: string;
  shadowColor: string;
}

type AvaliablesButtonVariantColorStyle = {
  [Property in ButtonVariantStyle]: IButtonCssProperties;
};

type AvaliablesButtonVariantColorType = {
  [Property in VariantStyle]: AvaliablesButtonVariantColorStyle;
};

const getButtonCssProperties = (
  mainColor: string
): AvaliablesButtonVariantColorStyle => {
  return {
    contained: {
      bgColor: mainColor,
      hoverBgColor: darken(0.1, mainColor),
      borderColor: mainColor,
      color: colors.white,
      hoverColor: colors.white,
      spinnerColor: colors.white,
      shadowColor: mainColor,
    },
    outlined: {
      bgColor: colors.transparent,
      hoverBgColor: darken(0.1, mainColor),
      borderColor: mainColor,
      color: mainColor,
      hoverColor: colors.white,
      spinnerColor: mainColor,
      shadowColor: mainColor,
    },
    texted: {
      bgColor: colors.transparent,
      hoverBgColor: colors.transparent,
      borderColor: colors.transparent,
      color: mainColor,
      hoverColor: mainColor,
      spinnerColor: mainColor,
      shadowColor: colors.transparent,
    },
  };
};

export const buttonVariants: AvaliablesButtonVariantColorType = {
  primary: getButtonCssProperties(colors.primary),
  secondary: getButtonCssProperties(colors.secondary),
  success: getButtonCssProperties(colors.success),
  info: getButtonCssProperties(colors.info),
  dark: getButtonCssProperties(colors.dark),
  danger: getButtonCssProperties(colors.danger),
  warning: getButtonCssProperties(colors.warning),
};

const buttonSizes = {
  sm: { h: rem(32), px: rem(16), py: rem(12) },
  md: { h: rem(44), px: rem(24), py: rem(14) },
  lg: { h: rem(48), px: rem(48), py: rem(16) },
};

type ButtonSize = keyof typeof buttonSizes;

export interface ConteinerProps {
  rounded?: boolean;
  variantColor?: VariantStyle;
  size?: ButtonSize;
  variantStyle?: ButtonVariantStyle;
  fullWidth?: boolean;
}

export const Container = styled.button<ConteinerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${rem(14)};
  transition: all ease 0.3s;
  &:not(:disabled) {
    cursor: pointer;
  }
  .${addClasseNamePrefix("btn-left-icon")},
    .${addClasseNamePrefix("btn-right-icon")} {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${rem(18)};
  }
  .${addClasseNamePrefix("btn-left-icon")} {
    margin-right: ${rem(16)};
  }
  .${addClasseNamePrefix("btn-right-icon")} {
    margin-left: ${rem(16)};
  }

  ${({ size, variantColor, variantStyle, rounded, fullWidth }) => {
    const buttonSize = buttonSizes[size];
    const buttonVariant = buttonVariants[variantColor][variantStyle];
    const isTexed = variantStyle === "texted";
    return css`
      height: ${isTexed ? "initial" : buttonSize.h};
      padding: ${isTexed ? 0 : `${buttonSize.py} ${buttonSize.px}`};
      border-radius: ${rem(rounded ? 50 : 3)};
      background-color: ${buttonVariant.bgColor};
      color: ${buttonVariant.color};
      border: 1px solid ${buttonVariant.borderColor};
      ${fullWidth &&
      css`
        width: 100%;
      `}
      &:not(:disabled) {
        &:hover {
          background-color: ${buttonVariant.hoverBgColor};
          border-color: ${buttonVariant.hoverBgColor};
          color: ${buttonVariant.hoverColor};
          text-decoration: ${isTexed ? "underline" : "initial"};
        }
        &:focus {
          ${ring(buttonVariant.shadowColor)};
        }
      }
      &:disabled {
        background-color: ${rgba(buttonVariant.bgColor, 0.65)};
        border-color: ${rgba(buttonVariant.bgColor, 0.65)};
      }
    `;
  }}
`;
