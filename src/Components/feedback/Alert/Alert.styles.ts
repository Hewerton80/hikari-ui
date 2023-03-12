import { borderColor, rem, rgba } from "polished";
import styled, { css } from "styled-components";
import { colors } from "../../../styles/colors";
import { css as cssStichers } from "../../../styles/theme";

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

const getAlertCssProperties2 = (mainColor: string) => {
  return {
    backgroundColor: rgba(mainColor, 0.2),
    borderColor: rgba(mainColor, 0.1),
    color: mainColor,
  };
};

const variantStyle = {
  primary: getAlertCssProperties2(colors.primary),
  secondary: getAlertCssProperties2(colors.secondary),
  danger: getAlertCssProperties2(colors.danger),
  success: getAlertCssProperties2(colors.success),
  info: getAlertCssProperties2(colors.info),
  warning: getAlertCssProperties2(colors.warning),
};

// @ts-ignore
export const Container2 = cssStichers("div", {
  display: "flex",
  alignItems: "center",
  text: "sm",
  px: "$5",
  py: "$3",
  borderRadius: "$1",
  variants: {
    variantStyle,
  },
});

export interface ContainerProps2 {
  variantStyle: keyof typeof variantStyle;
}
// return {
//   bgColor: rgba(mainColor, 0.2),
//   borderColor: rgba(mainColor, 0.1),
//   color: mainColor,
// };
// | "primary"
// | "secondary"
// | "success"
// | "info"
// | "danger"
// | "warning";
