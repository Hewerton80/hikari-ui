import { rgba, darken, rem } from "polished";
import { colors } from "../../../styles/colors";
import styled, { css } from "styled-components";
import { ring } from "../../../styles/shareds";

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
  sm: { h: rem(32), px: rem(16), py: rem(12) },
  md: { h: rem(44), px: rem(24), py: rem(14) },
  lg: { h: rem(48), px: rem(48), py: rem(16) },
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
  font-size: ${rem(14)};
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
      border-radius: ${rem(rounded ? 50 : 3)};
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
