import { css } from "../../../styles/theme";
import { spaces } from "../../../styles/spaces";
import { colors } from "../../../styles/colors";
import { labelOrientation } from "../../commonStyles/labelOrientationStyle";
import { important } from "polished";

const groupOrientation = {
  horizonal: { flexDirection: "row", spaceX: spaces["4"] },
  vertical: {
    flexDirection: "column",
    alignItems: "flex-start",
    spaceY: spaces["2"],
  },
};
export interface RadioGroupProps {
  orientation?: keyof typeof groupOrientation;
}

export const FormControlRadio = css("div", {
  display: "flex",
  ...important(labelOrientation.right),
});

export const RadioGroup = css("div", {
  display: "flex",
  variants: { orientation: groupOrientation },
});
export const RadioItem = css("button", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  size: spaces["4.5"],
  borderRadius: "50%",
  border: `${spaces["0.5"]} solid ${colors.primary}`,
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
export const RadioIdicator = css("span", {
  size: spaces["2"],
  backgroundColor: colors.white,
  borderRadius: "50%",
});
