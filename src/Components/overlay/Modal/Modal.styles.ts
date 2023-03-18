import { css, darkTheme } from "../../../styles/theme";
import { colors } from "../../../styles/colors";
import { spaces } from "../../../styles/spaces";
import { cardStyle } from "../../commonStyles/CardStyle";
import { rem } from "polished";

const size = {
  sm: { maxWidth: rem(300) },
  md: { maxWidth: rem(500) },
  lg: { maxWidth: rem(768) },
};

export const Overlay = css("div", {
  backgroundColor: "$dark-screen",
  position: "fixed",
  inset: 0,
});

export const Content = css("div", {
  ...cardStyle,
  positionCenter: "fixed",
  color: colors.black,
  width: `calc(100vw - ${spaces["16"]})`,
  maxHeight: `calc(100vh - ${spaces["32"]})`,
  backgroundColor: colors.white,
  borderColor: colors["gray-lightest"],
  [`.${darkTheme} &`]: {
    color: colors.white,
    backgroundColor: colors["dark-card"],
    borderColor: colors["dark-card"],
  },
  variants: { size },
});

export const Close = css("span", {
  position: "absolute",
  top: "$5",
  right: "$6",
  padding: "$1",
  cursor: "pointer",
  color: "$black",
  [`.${darkTheme} &`]: {
    color: "$light",
  },
});

export const Title = css("div", {
  display: "flex",
  px: "$7",
  paddingTop: "$6",
  "& > h5": {
    text: "xl",
    color: "$black",
    fontWeight: "normal",
    [`.${darkTheme} &`]: {
      color: "$light",
    },
  },
});

export const Body = css("div", {
  display: "flex",
  flexDirection: "column",
  px: "$7",
  py: "$6",
});

export const Footer = css("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  width: "100%",
  px: "$6",
  paddingBottom: "$6",
  gap: "$2",
});

export interface ModalProps {
  size?: keyof typeof size;
}
