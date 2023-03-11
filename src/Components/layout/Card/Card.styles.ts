import { rem } from "polished";
import { colors } from "../../../styles/colors";
import styled, { css } from "styled-components";

const variantImgCard = {
  top: "auto 0 0",
  bottom: "0 0 auto",
};

const variantFooterCard = {
  left: "flex-start",
  center: "center",
  right: "flex-end",
};

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

export interface ContainerImgProps {
  variantStyle?: keyof typeof variantImgCard;
}

export interface ContainerFooterProps {
  variantStyle?: keyof typeof variantFooterCard;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: ${rem(6)};
  overflow: hidden;
  ${({ theme, variantStyle }) => {
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
  }}
`;

export const ContainerImg = styled.img<ContainerImgProps>`
  ${({ variantStyle }) => css`
    width: 100%;
    height: auto;
    margin: ${variantImgCard[variantStyle]};
  `}
`;

export const ContainerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${rem(24)} ${rem(28)} ${rem(0)};
`;

export const ContainerTitle = styled.div`
  display: flex;
  & > h4 {
    font-size: ${rem(18)};
    line-height: ${rem(28)};
    font-weight: normal;
  }
`;

export const ContainerBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${rem(16)} ${rem(28)} ${rem(24)};
`;

export const ContainerFooter = styled.div<ContainerFooterProps>`
  display: flex;
  margin-top: auto;
  padding: 0 ${rem(28)} ${rem(24)};
  ${({ variantStyle }) => css`
    justify-content: ${variantFooterCard[variantStyle]};
  `}
`;
