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

interface GetButtonCssPropertiesArgs {
  mainColor: string;
  textColor: string;
  buttonVariantStyle: ButtonVariantStyle;
}
const getButtonCssProperties = ({
  mainColor,
  textColor,
  buttonVariantStyle,
}: GetButtonCssPropertiesArgs): CSS => {
  const buttonVariantStyleObject = {
    contained: {
      backgroundColor: mainColor,
      color: textColor,
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
        borderTopColor: textColor,
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
        color: textColor,
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
  | "light"
  | "danger"
  | "warning"
  | "primary-outlined"
  | "secondary-outlined"
  | "success-outlined"
  | "info-outlined"
  | "dark-outlined"
  | "light-outlined"
  | "danger-outlined"
  | "warning-outlined"
  | "primary-ghost"
  | "secondary-ghost"
  | "success-ghost"
  | "info-ghost"
  | "dark-ghost"
  | "light-ghost"
  | "danger-ghost"
  | "warning-ghost"
  | "primary-link"
  | "secondary-link"
  | "success-link"
  | "info-link"
  | "dark-link"
  | "light-link"
  | "danger-link"
  | "warning-link";

type AvaliablesButtonVariantColorType = {
  [Property in VariantStyle]: CSS;
};

export const variantStyle: AvaliablesButtonVariantColorType = {
  primary: getButtonCssProperties({
    mainColor: colors.primary,
    textColor: colors.white,
    buttonVariantStyle: "contained",
  }),
  secondary: getButtonCssProperties({
    mainColor: colors.secondary,
    textColor: colors.white,
    buttonVariantStyle: "contained",
  }),
  success: getButtonCssProperties({
    mainColor: colors.success,
    textColor: colors.white,
    buttonVariantStyle: "contained",
  }),
  info: getButtonCssProperties({
    mainColor: colors.info,
    textColor: colors.white,
    buttonVariantStyle: "contained",
  }),
  dark: getButtonCssProperties({
    mainColor: colors.dark,
    textColor: colors.white,
    buttonVariantStyle: "contained",
  }),
  light: getButtonCssProperties({
    mainColor: colors.light,
    textColor: colors.dark,
    buttonVariantStyle: "contained",
  }),
  danger: getButtonCssProperties({
    mainColor: colors.danger,
    textColor: colors.white,
    buttonVariantStyle: "contained",
  }),
  warning: getButtonCssProperties({
    mainColor: colors.warning,
    textColor: colors.white,
    buttonVariantStyle: "contained",
  }),
  "primary-outlined": getButtonCssProperties({
    mainColor: colors.primary,
    textColor: colors.white,
    buttonVariantStyle: "outlined",
  }),
  "secondary-outlined": getButtonCssProperties({
    mainColor: colors.secondary,
    textColor: colors.white,
    buttonVariantStyle: "outlined",
  }),
  "success-outlined": getButtonCssProperties({
    mainColor: colors.success,
    textColor: colors.white,
    buttonVariantStyle: "outlined",
  }),
  "info-outlined": getButtonCssProperties({
    mainColor: colors.info,
    textColor: colors.white,
    buttonVariantStyle: "outlined",
  }),
  "dark-outlined": getButtonCssProperties({
    mainColor: colors.dark,
    textColor: colors.white,
    buttonVariantStyle: "outlined",
  }),
  "light-outlined": getButtonCssProperties({
    mainColor: colors.light,
    textColor: colors.dark,
    buttonVariantStyle: "outlined",
  }),
  "danger-outlined": getButtonCssProperties({
    mainColor: colors.danger,
    textColor: colors.white,
    buttonVariantStyle: "outlined",
  }),
  "warning-outlined": getButtonCssProperties({
    mainColor: colors.warning,
    textColor: colors.white,
    buttonVariantStyle: "outlined",
  }),
  "primary-ghost": getButtonCssProperties({
    mainColor: colors.primary,
    textColor: colors.white,
    buttonVariantStyle: "ghost",
  }),
  "secondary-ghost": getButtonCssProperties({
    mainColor: colors.secondary,
    textColor: colors.white,
    buttonVariantStyle: "ghost",
  }),
  "success-ghost": getButtonCssProperties({
    mainColor: colors.success,
    textColor: colors.white,
    buttonVariantStyle: "ghost",
  }),
  "info-ghost": getButtonCssProperties({
    mainColor: colors.info,
    textColor: colors.white,
    buttonVariantStyle: "ghost",
  }),
  "dark-ghost": getButtonCssProperties({
    mainColor: colors.dark,
    textColor: colors.white,
    buttonVariantStyle: "ghost",
  }),
  "light-ghost": getButtonCssProperties({
    mainColor: colors.light,
    textColor: colors.dark,
    buttonVariantStyle: "ghost",
  }),
  "danger-ghost": getButtonCssProperties({
    mainColor: colors.danger,
    textColor: colors.white,
    buttonVariantStyle: "ghost",
  }),
  "warning-ghost": getButtonCssProperties({
    mainColor: colors.warning,
    textColor: colors.white,
    buttonVariantStyle: "ghost",
  }),
  "primary-link": getButtonCssProperties({
    mainColor: colors.primary,
    textColor: colors.white,
    buttonVariantStyle: "link",
  }),
  "secondary-link": getButtonCssProperties({
    mainColor: colors.secondary,
    textColor: colors.white,
    buttonVariantStyle: "link",
  }),
  "success-link": getButtonCssProperties({
    mainColor: colors.success,
    textColor: colors.white,
    buttonVariantStyle: "link",
  }),
  "info-link": getButtonCssProperties({
    mainColor: colors.info,
    textColor: colors.white,
    buttonVariantStyle: "link",
  }),
  "dark-link": getButtonCssProperties({
    mainColor: colors.dark,
    textColor: colors.white,
    buttonVariantStyle: "link",
  }),
  "light-link": getButtonCssProperties({
    mainColor: colors.light,
    textColor: colors.dark,
    buttonVariantStyle: "link",
  }),
  "danger-link": getButtonCssProperties({
    mainColor: colors.danger,
    textColor: colors.white,
    buttonVariantStyle: "link",
  }),
  "warning-link": getButtonCssProperties({
    mainColor: colors.warning,
    textColor: colors.white,
    buttonVariantStyle: "link",
  }),
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
