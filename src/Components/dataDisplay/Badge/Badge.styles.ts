import { colors } from "../../../styles/colors";
import { css } from "../../../styles/theme";
import { spaces } from "../../../styles/spaces";

export const variantStyle = {
  primary: { color: colors.white, backgroundColor: colors.primary },
  success: { color: colors.white, backgroundColor: colors.success },
  secondary: { color: colors.white, backgroundColor: colors.secondary },
  info: { color: colors.white, backgroundColor: colors.info },
  danger: { color: colors.white, backgroundColor: colors.danger },
  dark: { color: colors.white, backgroundColor: colors.dark },
  warning: { color: colors.black, backgroundColor: colors.warning },
};

export const Badge = css("span", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "fit-content",
  text: "xs",
  py: spaces["1.5"],
  px: "$2",
  borderRadius: "$1",
  variants: { variantStyle },
});

export interface BadgeProps {
  variantStyle?: keyof typeof variantStyle;
}
