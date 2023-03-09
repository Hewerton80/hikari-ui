import { rem } from "polished";
import { colors } from "../../../styles/colors";
import styled, { css } from "styled-components";
type VariantStyle =
  | "primary"
  | "secondary"
  | "success"
  | "info"
  | "dark"
  | "danger"
  | "warning";

interface IBadgeCssProperties {
  bgColor: string;
  color: string;
}

type AvaliablesBadgeVariantColorStyle = {
  [Property in VariantStyle]: IBadgeCssProperties;
};

const avaliablesBadgeVariantColorStyle: AvaliablesBadgeVariantColorStyle = {
  primary: { color: colors.white, bgColor: colors.primary },
  success: { color: colors.white, bgColor: colors.success },
  secondary: { color: colors.white, bgColor: colors.secondary },
  info: { color: colors.white, bgColor: colors.info },
  danger: { color: colors.white, bgColor: colors.danger },
  dark: { color: colors.white, bgColor: colors.dark },
  warning: { color: colors.black, bgColor: colors.warning },
};

export interface ContainerProps {
  variantStyle?: VariantStyle;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  padding: ${rem(6)} ${rem(8)};
  font-size: ${rem(12)};
  border-radius: ${rem(4)};
  ${({ variantStyle }) => {
    const badgeVariantColor = avaliablesBadgeVariantColorStyle[variantStyle];
    return css`
      color: ${badgeVariantColor.color};
      background-color: ${badgeVariantColor.bgColor};
    `;
  }}
`;
