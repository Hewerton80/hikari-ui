import { colors } from "../../../../styles/colors";
import { css, darkTheme } from "../../../../styles/theme";
import { spaces } from "../../../../styles/spaces";
import { orientationStyle } from "../../../commonStyles/variantOrientationStyle";

export interface MenuProps {
  orientation?: keyof typeof orientationStyle;
}

export const Menu = css("div", {
  minWidth: "$40",
  display: "flex",
  flexDirection: "column",
  py: "$2",
  shadow: "sm",
  backgroundColor: "$white",
  border: `${spaces["0.25"]} solid ${colors["gray-border"]}`,
  [`.${darkTheme} &`]: {
    borderColor: "$dark-card",
    backgroundColor: "$dark-card",
  },
});

export const Item = css("div", {
  display: "flex",
  alignItems: "center",
  size: "100%",
  px: "$6",
  py: "$1",
  text: "sm",
  whiteSpace: "nowrap",
  outline: "none",
  color: "$black",
  cursor: "pointer",
  "&:hover, &:focus": {
    backgroundColor: "$gray-light",
  },
  [`.${darkTheme} &`]: {
    color: "$light",
    "&:hover, &:focus": {
      backgroundColor: "$dark-hover",
    },
  },
});
