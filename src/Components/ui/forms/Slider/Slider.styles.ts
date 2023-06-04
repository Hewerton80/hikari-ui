import { css } from "../../../../styles/theme";
import { colors } from "../../../../styles/colors";
import { spaces } from "../../../../styles/spaces";
import { darken, rgba } from "polished";

export const SliderRoot = css("span", {
  position: "relative",
  display: "flex",
  alignItems: "center",
  userSelect: "none",
  touchAction: "none",
  width: "100%",
  height: spaces[20],
});

export const SliderTrack = css("span", {
  backgroundColor: rgba(colors.black, 0.48),
  position: "relative",
  flexGrow: 1,
  height: spaces["0.75"],
});

export const SliderRange = css("span", {
  position: "absolute",
  backgroundColor: colors.primary,
  height: "100%",
});

export const SliderThumb = css("span", {
  display: "block",
  size: spaces[5],
  backgroundColor: colors.primary,
  borderRadius: "100%",
  "&:hover": { backgroundColor: darken(0.1, colors.primary) },
  "&:focus": { outline: "none", ring: colors.primary },
});
