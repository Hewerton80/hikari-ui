import { css } from "../../../../styles/theme";
import { spaces } from "../../../../styles/spaces";
import { colors } from "../../../../styles/colors";

export const Appbar = css("div", {
  display: "flex",
  height: spaces["20"],
  width: "100%",
  px: spaces["7"],
  backgroundColor: colors.primary,
});

export const ToolBar = css("div", {
  display: "flex",
  alignItems: "center",
  height: "100%",
  width: "100%",
});
