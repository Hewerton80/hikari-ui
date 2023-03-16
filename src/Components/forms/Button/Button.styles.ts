import { rgba, darken, rem } from "polished";
import { colors } from "../../../styles/colors";
import { addClasseNamePrefix } from "../../../utils/addClasseNamePrefix";
import { css, CSS } from "../../../styles/theme";

type ButtonVariantStyle = "contained" | "outlined" | "texted";

const size = {
  sm: { height: "$8", px: "$4", py: "$3" },
  md: { height: "$11", px: "$6", py: rem(14) },
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
        backgroundColor: darken(0.1, mainColor),
        color: colors.white,
      },
      "&:disabled": {
        backgroundColor: rgba(mainColor, 0.1),
      },
      [`.${addClasseNamePrefix("spinner")} div`]: {
        borderTopColor: mainColor,
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
      [`.${addClasseNamePrefix("spinner")} div`]: {
        borderTopColor: mainColor,
      },
      padding: 0,
      height: "initial",
    },
  };
  return buttonVariantStyleObject[buttonVariantStyle];
};
type VariantStyle =
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

type AvaliablesButtonVariantColorType = {
  [Property in VariantStyle]: CSS;
};

export const variantStyle: AvaliablesButtonVariantColorType = {
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
