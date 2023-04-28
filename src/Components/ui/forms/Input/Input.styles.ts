import { formTextStyle } from "../../../commonStyles/formTextStyle";
import { css, CSS } from "../../../../styles/theme";
import { spaces } from "../../../../styles/spaces";
import { addClasseNamePrefix } from "../../../../utils/addClasseNamePrefix";

const iconStyle: CSS = {
  position: "absolute",
  bottom: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: formTextStyle.height,
  width: formTextStyle.height,
  "& > svg": {
    text: "lg",
  },
};

export const Input = css("input", {
  ...formTextStyle,
  [`&.${addClasseNamePrefix("with-left-icon")}`]: {
    paddingLeft: spaces["11.5"],
  },
  [`&.${addClasseNamePrefix("with-right-icon")}`]: {
    paddingRight: spaces["11.5"],
  },
  [`& ~ .${addClasseNamePrefix("input-left-icon")}`]: {
    ...iconStyle,
    left: 0,
  },
  [`& ~ .${addClasseNamePrefix("input-right-icon")}`]: {
    ...iconStyle,
    right: 0,
  },
  "&[type=number]": {
    "&::-webkit-inner-spin-button, &::-webkit-outer-spin-button": {
      "-webkit-appearance": "none",
    },
  },
});
