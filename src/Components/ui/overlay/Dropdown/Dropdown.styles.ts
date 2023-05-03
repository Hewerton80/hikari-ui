import { colors } from "../../../../styles/colors";
import { CSS, css, darkTheme, keyframes } from "../../../../styles/theme";
import { spaces } from "../../../../styles/spaces";
import {
  orientationStyle,
  SideType,
  AligneType,
} from "../../../commonStyles/variantOrientationStyle";
import { rgba } from "polished";

export interface MenuProps {
  orientation?: keyof typeof orientationStyle;
}

const slideAndFade = keyframes({
  "0%": { opacity: 0, transform: "scale(0);" },
  "100%": { opacity: 1, transform: "scale(1);" },
});
interface IGetAnimationStyleArgs {
  aligne: AligneType;
  side1: SideType;
  side2?: SideType;
}
const getAnimationStyle = ({
  aligne,
  side1,
  side2,
}: IGetAnimationStyleArgs): CSS => {
  const transformOrigin = `${side1}${side2 ? " " + side2 : ""}`;
  return {
    [`&[data-align="${aligne}"]`]: {
      transformOrigin,
      animationName: slideAndFade,
    },
  };
};
export const Menu = css("div", {
  minWidth: "$40",
  display: "flex",
  flexDirection: "column",
  py: "$2",
  shadow: "sm",
  backgroundColor: "$white",
  border: `${spaces["0.25"]} solid ${colors["gray-border"]}`,
  [`.${darkTheme} &`]: {
    backgroundColor: "$dark-card",
    borderColor: rgba(colors.white, 0.1),
  },
  animationDuration: "400ms",
  animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
  willChange: "transform, opacity",

  '&[data-state="open"]': {
    '&[data-side="top"]': {
      ...getAnimationStyle({ aligne: "start", side1: "left", side2: "bottom" }),
      ...getAnimationStyle({ aligne: "end", side1: "bottom", side2: "right" }),
      ...getAnimationStyle({ aligne: "center", side1: "bottom" }),
    },
    '&[data-side="right"]': {
      ...getAnimationStyle({ aligne: "start", side1: "left", side2: "top" }),
    },
    '&[data-side="bottom"]': {
      ...getAnimationStyle({ aligne: "start", side1: "left", side2: "top" }),
      ...getAnimationStyle({ aligne: "end", side1: "top", side2: "right" }),
      ...getAnimationStyle({ aligne: "center", side1: "top" }),
    },
    '&[data-side="left"]': {
      ...getAnimationStyle({ aligne: "start", side1: "right", side2: "top" }),
    },
  },
});

export const Toogle = css("span", {
  cursor: "pointer",
  outline: "none",
  border: "none",
  backgroundColor: "transparent",
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
