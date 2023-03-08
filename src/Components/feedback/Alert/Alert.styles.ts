import { rem, rgba } from "polished";
import styled, { css } from "styled-components";
import { colors } from "../../../styles/colors";

type VariantAlertStyle =
  | "primary"
  | "secondary"
  | "success"
  | "info"
  | "danger"
  | "warning";

interface IAlertCssProperties {
  bgColor: string;
  borderColor: string;
  color: string;
}

type AvaliablesVariantColorStyle = {
  [Property in VariantAlertStyle]: IAlertCssProperties;
};

const getAlertCssProperties = (mainColor: string): IAlertCssProperties => {
  return {
    bgColor: rgba(mainColor, 0.2),
    borderColor: rgba(mainColor, 0.1),
    color: mainColor,
  };
};

const avaliablesVariantColorStyle: AvaliablesVariantColorStyle = {
  primary: getAlertCssProperties(colors.primary),
  secondary: getAlertCssProperties(colors.secondary),
  danger: getAlertCssProperties(colors.danger),
  success: getAlertCssProperties(colors.success),
  info: getAlertCssProperties(colors.info),
  warning: getAlertCssProperties(colors.warning),
};

export interface ContainerProps {
  variantStyle: VariantAlertStyle;
}

//   'flex items-center',
//   'px-5 py-3 w-full text-sm border-1 rounded-[4px]',

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  padding: 12px 20px;
  width: 100%;
  font-size: ${rem(14)};
  border-width: 1px;
  border-radius: 4px;
  ${({ variantStyle }) => {
    const variantColorStyle = avaliablesVariantColorStyle[variantStyle];
    return css`
      background-color: ${variantColorStyle.bgColor};
      color: ${variantColorStyle.color};
      border-color: ${variantColorStyle.borderColor};
    `;
  }}
`;
