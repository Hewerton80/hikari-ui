import { rgba, darken, rem } from "polished";
import { colors } from "../../../styles/colors";
import styled, { css } from "styled-components";
import { ring } from "../../helpers/ring";
import { addClasseNamePrefix } from "../../../utils/addClasseNamePrefix";
import { css as cssStichers, CSS } from "../../../styles/theme";

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
// display: flex;
// justify-content: center;
// align-items: center;
// font-size: ${rem(14)};
// transition: all ease 0.3s;
// &:not(:disabled) {
//   cursor: pointer;
// }
// .${addClasseNamePrefix("btn-left-icon")},
//   .${addClasseNamePrefix("btn-right-icon")} {
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   font-size: ${rem(18)};
// }
// .${addClasseNamePrefix("btn-left-icon")} {
//   margin-right: ${rem(16)};
// }
// .${addClasseNamePrefix("btn-right-icon")} {
//   margin-left: ${rem(16)};
// }
const size = {
  sm: { height: "$8", px: "$4", py: "$3" },
  md: { height: "$11", px: "$6", py: rem(14) },
  lg: { height: "$12", px: "$12", py: "$4" },
};

type AvaliablesButtonVariantColorStyle2 = {
  [Property in ButtonVariantStyle]: CSS;
};

const getButtonCssProperties2 = (
  mainColor: string,
  buttonVariantStyle: ButtonVariantStyle
): CSS => {
  const buttonVariantStyleObject = {
    contained: {
      backgroundColor: mainColor,
      color: colors.white,
      borderColor: mainColor,
      "&:not(:disabled):focus": {
        ring: mainColor,
      },
      "&:not(:disabled):hover": {
        backgroundColor: darken(0.1, mainColor),
      },
      "&:disabled": {
        backgroundColor: rgba(mainColor, 0.65),
      },
    },
    outlined: {
      backgroundColor: colors.transparent,
      color: mainColor,
      borderColor: mainColor,
      "&:not(:disabled):focus": {
        ring: mainColor,
      },
      "&:not(:disabled):hover": {
        backgroundColor: darken(0.1, mainColor),
        color: colors.white,
      },
      "&:disabled": {
        backgroundColor: rgba(mainColor, 0.65),
      },
    },
    texted: {
      backgroundColor: colors.transparent,
      color: mainColor,
      borderColor: colors.transparent,
      "&:not(:disabled):focus": {
        ring: colors.transparent,
      },
      "&:not(:disabled):hover": {
        backgroundColor: colors.transparent,
        color: mainColor,
        textDecoration: "underline",
      },
      "&:disabled": {
        backgroundColor: rgba(mainColor, 0.65),
      },
      padding: 0,
      height: "initial",
    },
  };
  return buttonVariantStyleObject[buttonVariantStyle];
};
type VariantStyle2 =
  | "primary-contained"
  | "secondary-contained"
  | "success-contained"
  | "info-contained"
  | "dark-contained"
  | "danger-contained"
  | "warning-contained"
  | "primary-outlined"
  | "secondary-outlined"
  | "success-outlined"
  | "info-outlined"
  | "dark-outlined"
  | "danger-outlined"
  | "warning-outlined"
  | "primary-texted"
  | "secondary-texted"
  | "success-texted"
  | "info-texted"
  | "dark-texted"
  | "danger-texted"
  | "warning-texted";

type AvaliablesButtonVariantColorType2 = {
  [Property in VariantStyle2]: CSS;
};

export const variantStyle: AvaliablesButtonVariantColorType2 = {
  "primary-contained": getButtonCssProperties2(colors.primary, "contained"),
  "secondary-contained": getButtonCssProperties2(colors.secondary, "contained"),
  "success-contained": getButtonCssProperties2(colors.success, "contained"),
  "info-contained": getButtonCssProperties2(colors.info, "contained"),
  "dark-contained": getButtonCssProperties2(colors.dark, "contained"),
  "danger-contained": getButtonCssProperties2(colors.danger, "contained"),
  "warning-contained": getButtonCssProperties2(colors.warning, "contained"),
  "primary-outlined": getButtonCssProperties2(colors.primary, "outlined"),
  "secondary-outlined": getButtonCssProperties2(colors.secondary, "outlined"),
  "success-outlined": getButtonCssProperties2(colors.success, "outlined"),
  "info-outlined": getButtonCssProperties2(colors.info, "outlined"),
  "dark-outlined": getButtonCssProperties2(colors.dark, "outlined"),
  "danger-outlined": getButtonCssProperties2(colors.danger, "outlined"),
  "warning-outlined": getButtonCssProperties2(colors.warning, "outlined"),
  "primary-texted": getButtonCssProperties2(colors.primary, "texted"),
  "secondary-texted": getButtonCssProperties2(colors.secondary, "texted"),
  "success-texted": getButtonCssProperties2(colors.success, "texted"),
  "info-texted": getButtonCssProperties2(colors.info, "texted"),
  "dark-texted": getButtonCssProperties2(colors.dark, "texted"),
  "danger-texted": getButtonCssProperties2(colors.danger, "texted"),
  "warning-texted": getButtonCssProperties2(colors.warning, "texted"),
};

export const Button = cssStichers("button", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  text: "sm",
  transition: "all ease 0.3s",
  borderWidth: rem(1),
  borderStyle: "solid",
  borderRadius: rem(3),
  "&:not(:disabled)": {
    cursor: "pointer",
  },
  [`
  .${addClasseNamePrefix("btn-left-icon")},
  .${addClasseNamePrefix("btn-right-icon")}`]: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    text: "lg",
  },
  variants: {
    size,
    variantStyle,
  },
});

export interface ButtonProps {
  variantStyle?: VariantStyle2;
  size?: keyof typeof size;
}
