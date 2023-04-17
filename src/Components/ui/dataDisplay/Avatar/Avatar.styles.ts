import { css } from "../../../../styles/theme";
import { spaces } from "../../../../styles/spaces";
import { colors } from "../../../../styles/colors";

export const Root = css("span", {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  size: spaces["10"],
  overflow: "hidden",
  borderRadius: "50%",
  userSelect: "none",
  verticalAlign: "middle",
});
export const Image = css("img", {
  size: "100%",
  objectFit: "cover",
  borderRadius: "inherit",
});
export const Fallback = css("span", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  size: "100%",
  backgroundColor: colors.white,
  color: colors.primary,
  fontWeight: "bold",
  textTransform: "uppercase",
});
