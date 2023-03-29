import { css } from "../../../styles/theme";
import { colors } from "../../../styles/colors";
import { rem } from "polished";

const switchWidth = 38;
const switchThumbSize = 16;
const switchPadding = 2;
const switchHeight = switchThumbSize + 2 * switchPadding;

const labelOrientation = {
  top: {},
  right: {
    flexDirection: "row-reverse",
    label: {
      marginBottom: 0,
      marginLeft: "$2",
    },
  },
  left: {
    flexDirection: "row",
    label: {
      marginBottom: 0,
      marginRight: "$2",
    },
  },
};

export interface SwitchProps {
  labelOrientation?: keyof typeof labelOrientation;
}

export const FormControlSwitch = css("div", {
  variants: { labelOrientation },
});

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
  "&:disabled": {
    opacity: 0.6,
  },
  '&[data-state="unchecked"]': {
    backgroundColor: colors.muted,
  },
});

export const SwitchThumb = css("span", {
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
