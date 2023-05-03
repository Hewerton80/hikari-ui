import { css, darkTheme } from "../../../../styles/theme";
import { spaces } from "../../../../styles/spaces";
import { colors } from "../../../../styles/colors";
import { rem, rgba } from "polished";

export const Appbar = css("header", {
  display: "flex",
  height: spaces["20"],
  width: "100%",
  px: spaces["7"],
  backgroundColor: colors.primary,
  border: `${rem(1)} solid ${colors.primary}`,
  [`.${darkTheme} &`]: {
    backgroundColor: colors["dark-card"],
    borderColor: rgba(colors.white, 0.1),
  },
});

export const ToolBar = css("div", {
  display: "flex",
  alignItems: "center",
  height: "100%",
  width: "100%",
});
