import { colors } from "../../../styles/colors";
import { spaces } from "../../../styles/spaces";
import { css, darkTheme } from "../../../styles/theme";

const cardVariantImgStyle = {
  default: {
    color: colors.black,
    backgroundColor: colors.white,
    borderColor: colors["gray-lightest"],
    [`.${darkTheme} &`]: {
      color: colors.white,
      background: colors["dark-card"],
      borderColor: colors["dark-card"],
    },
  },
  success: {
    color: colors.white,
    backgroundColor: colors.success,
    borderColor: colors.success,
  },
  secondary: {
    color: colors.white,
    backgroundColor: colors.secondary,
    borderColor: colors.secondary,
  },
  danger: {
    color: colors.white,
    backgroundColor: colors.danger,
    borderColor: colors.danger,
  },
  dark: {
    color: colors.white,
    backgroundColor: colors.dark,
    borderColor: colors.dark,
  },
  info: {
    color: colors.white,
    backgroundColor: colors.info,
    borderColor: colors.info,
  },
  primary: {
    color: colors.white,
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  warning: {
    color: colors.black,
    backgroundColor: colors.warning,
    borderColor: colors.warning,
  },
};

export const Card = css("div", {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  borderRadius: spaces["1.5"],
  overflow: "hidden",
  color: colors.white,
  background: colors.black,
  borderWidth: spaces["0.25"],
  borderStyle: "solid",
  variants: { variantStyle: cardVariantImgStyle },
});

export interface CardProps {
  variantStyle?: keyof typeof cardVariantImgStyle;
}

const variantImgStyle = {
  top: { marginTop: "auto" },
  bottom: { marginBottom: "auto" },
};

export interface CardImgProps {
  variantStyle?: keyof typeof variantImgStyle;
}

export const CardImg = css("img", {
  width: "100%",
  height: "auto",
  variants: { variantStyle: variantImgStyle },
});

export const CardHeader = css("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: `$6 $7 $0`,
});

export const CardTitle = css("div", {
  display: "flex",
  "& > h4": {
    text: "lg",
    fontWeight: "normal",
  },
});

export const CardBody = css("div", {
  display: "flex",
  flexDirection: "column",
  padding: `$4 $7 $6`,
});

const variantFooterStyle = {
  left: { justifyContent: "flex-start" },
  center: { justifyContent: "center" },
  right: { justifyContent: "flex-end" },
};

export interface CardFooterProps {
  variantStyle?: keyof typeof variantFooterStyle;
}

export const CardFooter = css("div", {
  display: "flex",
  marginTop: "auto",
  padding: `$0 $7 $6`,
  variants: { variantStyle: variantFooterStyle },
});
