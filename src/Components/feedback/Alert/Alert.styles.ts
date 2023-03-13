import { rgba } from "polished";
import { css } from "../../../styles/theme";
import { colors } from "../../../styles/colors";

const getAlertCssProperties = (color: string) => {
  return {
    backgroundColor: rgba(color, 0.2),
    borderColor: rgba(color, 0.1),
    color,
  };
};

const variantStyle = {
  primary: getAlertCssProperties(colors.primary),
  secondary: getAlertCssProperties(colors.secondary),
  danger: getAlertCssProperties(colors.danger),
  success: getAlertCssProperties(colors.success),
  info: getAlertCssProperties(colors.info),
  warning: getAlertCssProperties(colors.warning),
};

export interface ContainerProps {
  variantStyle: keyof typeof variantStyle;
}

// @ts-ignore
export const Alert = css("div", {
  display: "flex",
  alignItems: "center",
  text: "sm",
  px: "$5",
  py: "$3",
  borderRadius: "$1",
  variants: { variantStyle },
});
