import { css } from "../../../../styles/theme";
import { colors } from "../../../../styles/colors";
import { spaces } from "../../../../styles/spaces";
import { darken, rgba } from "polished";

export const SliderRoot = css("span", {
  position: "relative",
  display: "flex",
  userSelect: "none",
  touchAction: "none",
  [`&[data-orientation="horizontal"]`]: {
    width: "100%",
    height: spaces[5],
    alignItems: "center",
  },
  [`&[data-orientation="vertical"]`]: {
    width: spaces[5],
    height: "100%",
    justifyContent: "center",
  },
});

export const SliderTrack = css("span", {
  backgroundColor: rgba(colors.primary, 0.3),
  position: "relative",
  [`&[data-orientation="horizontal"]`]: {
    height: spaces["0.75"],
    flexGrow: 1,
  },
  [`&[data-orientation="vertical"]`]: {
    width: spaces["0.75"],
    height: "100%",
  },
});

export const SliderRange = css("span", {
  position: "absolute",
  backgroundColor: colors.primary,
  flexGrow: 1,
  [`&[data-orientation="horizontal"]`]: {
    height: spaces["0.75"],
  },
  [`&[data-orientation="vertical"]`]: {
    width: spaces["0.75"],
  },
});

export const SliderThumb = css("span", {
  display: "block",
  size: spaces[5],
  backgroundColor: colors.primary,
  borderRadius: "100%",
  "&:hover": { backgroundColor: darken(0.1, colors.primary) },
  "&:focus": { outline: "none", ring: colors.primary },
});
