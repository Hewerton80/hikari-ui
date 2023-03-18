import { colors } from "../../../styles/colors";
import { css, darkTheme } from "../../../styles/theme";
import { spaces } from "../../../styles/spaces";

type MenuOrientationType =
  | "left"
  | "right"
  | "top-start"
  | "top-center"
  | "top-right"
  | "bottom-start"
  | "bottom-center"
  | "bottom-right";

type AvaliableOrientationsMenu = {
  [Property in MenuOrientationType]: {
    align: "start" | "center" | "end";
    side: "top" | "right" | "bottom" | "left";
  };
};

export const menuOrientation: AvaliableOrientationsMenu = {
  "top-start": { align: "start", side: "top" },
  "top-center": { align: "center", side: "top" },
  "top-right": { align: "end", side: "top" },
  left: { align: "start", side: "left" },
  right: { align: "start", side: "right" },
  "bottom-start": { align: "start", side: "bottom" },
  "bottom-center": { align: "center", side: "bottom" },
  "bottom-right": { align: "end", side: "bottom" },
};

export interface MenuProps {
  orientation?: MenuOrientationType;
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
