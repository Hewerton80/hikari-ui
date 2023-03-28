import { css } from "../../../styles/theme";
import { colors } from "../../../styles/colors";
import { rem } from "polished";

const switchWidth = 38;
const switchThumbSize = 16;
const switchPadding = 2;
const switchHeight = switchThumbSize + 2 * switchPadding;

export const SwitchRoot = css("button", {
  width: rem(switchWidth),
  height: rem(switchHeight),
  backgroundColor: colors.primary,
  border: "none",
  transition: "all 100ms ease 0s",
  borderRadius: rem(switchThumbSize),
  "&:not(:disabled)": {
    cursor: "pointer",
  },
  '&[data-state="unchecked"]': {
    backgroundColor: colors.muted,
  },
});

export const SwitchThumb = css("span", {
  //   fill:'trf'
  display: "block",
  size: rem(switchThumbSize),
  backgroundColor: "$white",
  borderRadius: "100%",
  transition: "transform 100ms ease 0s",
  transform: `translateX(${rem(switchPadding)})`,
  '&[data-state="checked"]': {
    transform: `translateX(${rem(
      switchWidth - (switchPadding + switchThumbSize)
    )})`,
  },
});
