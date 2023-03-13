import { rem } from "polished";
import { colors } from "../../../styles/colors";
import styled, { css } from "styled-components";
import { css as cssStichers, darkTheme } from "../../../styles/theme";

type VariantStyle =
  | "default"
  | "primary"
  | "secondary"
  | "success"
  | "info"
  | "dark"
  | "danger"
  | "warning";

interface ICardCssProperties {
  bgColor: string;
  color: string;
}

type AvaliablesCardVariantColorStyle = {
  [Property in VariantStyle]: ICardCssProperties;
};

const avaliablesCardVariantColorStyle: AvaliablesCardVariantColorStyle = {
  default: { color: colors.black, bgColor: colors.white },
  success: { color: colors.white, bgColor: colors.success },
  secondary: { color: colors.white, bgColor: colors.secondary },
  danger: { color: colors.white, bgColor: colors.danger },
  dark: { color: colors.white, bgColor: colors.dark },
  info: { color: colors.white, bgColor: colors.info },
  primary: { color: colors.white, bgColor: colors.primary },
  warning: { color: colors.black, bgColor: colors.warning },
};

export interface ContainerProps {
  variantStyle?: VariantStyle;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: ${rem(6)};
  overflow: hidden;
  /* ${({ theme, variantStyle }) => {
    const isDarkMode = theme.isDarkMode;
    const variantColor = avaliablesCardVariantColorStyle[variantStyle];
    return css`
      border: 1px solid
        ${isDarkMode ? colors["dark-card"] : colors["gray-lightest"]};
      ${isDarkMode && variantStyle === "default"
        ? css`
            color: ${colors.white};
            background-color: ${colors["dark-card"]};
          `
        : css`
            color: ${variantColor.color};
            background-color: ${variantColor.bgColor};
          `}
    `;
  }} */
`;

const variantImgStyle = {
  top: { marginTop: "auto" },
  bottom: { marginBottom: "auto" },
};

export interface CardImgProps {
  variantStyle?: keyof typeof variantImgStyle;
}

export const CardImg = cssStichers("img", {
  width: "100%",
  height: "auto",
  variants: { variantStyle: variantImgStyle },
});

export const CardHeader = cssStichers("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: `$6 $7 $0`,
});

export const CardTitle = cssStichers("div", {
  display: "flex",
  "& > h4": {
    text: "lg",
    fontWeight: "normal",
  },
});

export const CardBody = cssStichers("div", {
  display: "flex",
  flexDirection: "column",
  padding: `$4 $7 $6`,
  [`.${darkTheme} &`]: {
    backgroundColor: colors["dark-card"],
  },
});

const variantFooterStyle = {
  left: { justifyContent: "flex-start" },
  center: { justifyContent: "center" },
  right: { justifyContent: "flex-end" },
};

export interface CardFooterProps {
  variantStyle?: keyof typeof variantFooterStyle;
}

export const CardFooter = cssStichers("div", {
  display: "flex",
  marginTop: "auto",
  padding: `$0 $7 $6`,
  variants: { variantStyle: variantFooterStyle },
});
