import { rgba, darken, rem } from "polished";
import { colors } from "../../../../styles/colors";
import { addClasseNamePrefix } from "../../../../utils/addClasseNamePrefix";
import { css, CSS } from "../../../../styles/theme";
import { spaces } from "../../../../styles/spaces";

type ButtonVariantStyle = "contained" | "outlined" | "link" | "ghost";

const size = {
  sm: { height: "$8", px: "$4", py: "$3" },
  md: { height: "$11", px: "$6", py: spaces["3.5"] },
  lg: { height: "$12", px: "$12", py: "$4" },
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
      [`.${addClasseNamePrefix("spinner")} div`]: {
        borderTopColor: colors.white,
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
        backgroundColor: mainColor,
        color: colors.white,
      },
      "&:disabled": {
        backgroundColor: rgba(mainColor, 0.1),
      },
      [`.${addClasseNamePrefix("spinner")} div`]: {
        borderTopColor: mainColor,
      },
    },
    ghost: {
      backgroundColor: colors.transparent,
      color: mainColor,
      borderColor: colors.transparent,
      "&:not(:disabled):focus": {
        ring: mainColor,
      },
      "&:not(:disabled):hover": {
        backgroundColor: rgba(mainColor, 0.1),
        color: mainColor,
      },
      "&:disabled": {
        backgroundColor: rgba(mainColor, 0.1),
      },
      [`.${addClasseNamePrefix("spinner")} div`]: {
        borderTopColor: mainColor,
      },
    },
    link: {
      backgroundColor: colors.transparent,
      color: mainColor,
      borderColor: colors.transparent,
      "&:not(:disabled):focus": {
        ring: colors.transparent,
      },
      "&:not(:disabled):hover": {
        backgroundColor: colors.transparent,
        color: mainColor,
      },
      "&:disabled": {
        backgroundColor: rgba(mainColor, 0.65),
      },
      [`.${addClasseNamePrefix("spinner")} div`]: {
        borderTopColor: mainColor,
      },
      textDecoration: "underline",
      // padding: 0,
      // height: "initial",
    },
  };
  return buttonVariantStyleObject[buttonVariantStyle];
};
type VariantStyle =
  | "primary"
  | "secondary"
  | "success"
  | "info"
  | "dark"
  | "danger"
  | "warning"
  | "primary-outlined"
  | "secondary-outlined"
  | "success-outlined"
  | "info-outlined"
  | "dark-outlined"
  | "danger-outlined"
  | "warning-outlined"
  | "primary-ghost"
  | "secondary-ghost"
  | "success-ghost"
  | "info-ghost"
  | "dark-ghost"
  | "danger-ghost"
  | "warning-ghost"
  | "primary-link"
  | "secondary-link"
  | "success-link"
  | "info-link"
  | "dark-link"
  | "danger-link"
  | "warning-link";

type AvaliablesButtonVariantColorType = {
  [Property in VariantStyle]: CSS;
};

export const variantStyle: AvaliablesButtonVariantColorType = {
  primary: getButtonCssProperties2(colors.primary, "contained"),
  secondary: getButtonCssProperties2(colors.secondary, "contained"),
  success: getButtonCssProperties2(colors.success, "contained"),
  info: getButtonCssProperties2(colors.info, "contained"),
  dark: getButtonCssProperties2(colors.dark, "contained"),
  danger: getButtonCssProperties2(colors.danger, "contained"),
  warning: getButtonCssProperties2(colors.warning, "contained"),
  "primary-outlined": getButtonCssProperties2(colors.primary, "outlined"),
  "secondary-outlined": getButtonCssProperties2(colors.secondary, "outlined"),
  "success-outlined": getButtonCssProperties2(colors.success, "outlined"),
  "info-outlined": getButtonCssProperties2(colors.info, "outlined"),
  "dark-outlined": getButtonCssProperties2(colors.dark, "outlined"),
  "danger-outlined": getButtonCssProperties2(colors.danger, "outlined"),
  "warning-outlined": getButtonCssProperties2(colors.warning, "outlined"),
  "primary-ghost": getButtonCssProperties2(colors.primary, "ghost"),
  "secondary-ghost": getButtonCssProperties2(colors.secondary, "ghost"),
  "success-ghost": getButtonCssProperties2(colors.success, "ghost"),
  "info-ghost": getButtonCssProperties2(colors.info, "ghost"),
  "dark-ghost": getButtonCssProperties2(colors.dark, "ghost"),
  "danger-ghost": getButtonCssProperties2(colors.danger, "ghost"),
  "warning-ghost": getButtonCssProperties2(colors.warning, "ghost"),
  "primary-link": getButtonCssProperties2(colors.primary, "link"),
  "secondary-link": getButtonCssProperties2(colors.secondary, "link"),
  "success-link": getButtonCssProperties2(colors.success, "link"),
  "info-link": getButtonCssProperties2(colors.info, "link"),
  "dark-link": getButtonCssProperties2(colors.dark, "link"),
  "danger-link": getButtonCssProperties2(colors.danger, "link"),
  "warning-link": getButtonCssProperties2(colors.warning, "link"),
};

const rounded = {
  false: {
    borderRadius: rem(3),
  },
  true: {
    borderRadius: rem(50),
  },
};

const fullWidth = {
  true: {
    width: "100%",
  },
  false: {},
};

export const Button = css("button", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  text: "sm",
  transition: "all ease 0.3s",
  borderWidth: rem(1),
  borderStyle: "solid",
  width: "fit-content",
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
  [`.${addClasseNamePrefix("btn-left-icon")}`]: {
    marginRight: "$4",
  },
  [`.${addClasseNamePrefix("btn-right-icon")}`]: {
    marginLeft: "$4",
  },

  variants: {
    size,
    variantStyle,
    rounded,
    fullWidth,
  },
});

export interface ButtonProps {
  variantStyle?: VariantStyle;
  size?: keyof typeof size;
}
