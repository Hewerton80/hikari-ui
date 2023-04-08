import { css, keyframes } from "../../../styles/theme";
import { spaces } from "../../../styles/spaces";
import { colors } from "../../../styles/colors";
import { labelOrientation } from "../../commonStyles/labelOrientationStyle";

export interface CheckboxProps {
  labelOrientation?: keyof typeof labelOrientation;
}

export const FormControlCheckbox = css("div", {
  variants: { labelOrientation },
});

export const CheckboxRoot = css("button", {
  size: spaces["4.5"],
  border: `${spaces["0.5"]} solid ${colors.primary}`,
  borderRadius: spaces["0.5"],
  transition: "all 300ms ease 0s",
  "&:not(:disabled)": {
    cursor: "pointer",
  },
  "&:disabled": {
    opacity: 0.6,
  },
  '&[data-state="checked"]': {
    backgroundColor: colors.primary,
  },
  '&[data-state="unchecked"]': {
    backgroundColor: colors.transparent,
  },
});

const show = keyframes({
  from: {
    transform: "scale(0) rotate(90deg)",
  },
  to: {
    transform: "scale(0.8) rotate(0deg)",
  },
});

export const CheckboxIndcator = css("span", {
  "& > svg": {
    fill: colors.white,
    transform: "scale(0.8)",
    animation: `${show} .3s`,
  },
});
