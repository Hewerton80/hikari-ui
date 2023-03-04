import { rgba, darken } from "polished";
import { toRem } from "../../../utils/toRem";
import { colors } from "../../../theme/colors";
import styled, { css } from "styled-components";

type ButtonVariantColor =
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
  [Property in ButtonVariantColor]: AvaliablesButtonVariantColorStyle;
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
  sm: { h: toRem(32), px: toRem(16), py: toRem(12) },
  md: { h: toRem(44), px: toRem(24), py: toRem(14) },
  lg: { h: toRem(48), px: toRem(48), py: toRem(16) },
};

type ButtonSize = keyof typeof buttonSizes;

export interface IConteinerProps {
  rounded?: boolean;
  variantColor?: ButtonVariantColor;
  size?: ButtonSize;
  variantStyle?: ButtonVariantStyle;
}

export const Container = styled.button<IConteinerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  font-size: ${toRem(14)};
  transition: all ease 0.3s;
  &:not(:disabled) {
    cursor: pointer;
  }

  ${({ size, variantColor, variantStyle, rounded }) => {
    const buttonSize = buttonSizes[size];
    const buttonVariant = buttonVariants[variantColor][variantStyle];
    const isTexed = variantStyle === "texted";
    return css`
      height: ${isTexed ? "initial" : buttonSize.h};
      padding: ${isTexed ? 0 : `${buttonSize.py} ${buttonSize.px}`};
      border-radius: ${toRem(rounded ? 50 : 3)};
      background-color: ${buttonVariant.bgColor};
      color: ${buttonVariant.color};
      border: 1px solid ${buttonVariant.borderColor};
      &:not(:disabled) {
        &:hover {
          background-color: ${buttonVariant.hoverBgColor};
          border-color: ${buttonVariant.hoverBgColor};
          color: ${buttonVariant.hoverColor};
          text-decoration: ${isTexed ? "underline" : "initial"};
        }
        &:focus {
          box-shadow: ${`0 0 0 3.2px ${rgba(buttonVariant.shadowColor, 0.5)}`};
        }
      }
      &:disabled {
        background-color: ${rgba(buttonVariant.bgColor, 0.65)};
        border-color: ${rgba(buttonVariant.bgColor, 0.65)};
      }
    `;
  }}
`;
