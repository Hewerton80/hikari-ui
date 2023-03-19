import { css, darkTheme, keyframes } from "../../../styles/theme";
import { colors } from "../../../styles/colors";
import { spaces } from "../../../styles/spaces";
import { cardStyle } from "../../commonStyles/CardStyle";
import { rem } from "polished";

const size = {
  sm: { maxWidth: rem(300) },
  md: { maxWidth: rem(500) },
  lg: { maxWidth: rem(768) },
};

const overlayShow = keyframes({
  "0%": { opacity: 0 },
  "100%": { opacity: 1 },
});

const contentShow = keyframes({
  from: {
    transform: "translate(-50%, -50%) scale(0.7)",
    opacity: 0,
  },
  to: {
    transform: "translate(-50%, -50%) scale(1)",
    opacity: 1,
  },
});

export const Overlay = css("div", {
  backgroundColor: "$dark-screen",
  position: "fixed",
  inset: 0,
  animation: `${overlayShow} 150ms`,
});

export const Content = css("div", {
  ...cardStyle,
  positionCenter: "fixed",
  color: colors.black,
  width: `calc(100vw - ${spaces["16"]})`,
  maxHeight: `calc(100vh - ${spaces["32"]})`,
  backgroundColor: colors.white,
  borderColor: colors["gray-lightest"],
  animation: `${contentShow} 150ms`,
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

const positionfooter = {
  start: { justifyContent: "flex-start" },
  center: { justifyContent: "center" },
  end: { justifyContent: "flex-end" },
};

export const Footer = css("div", {
  display: "flex",
  alignItems: "center",
  width: "100%",
  px: "$6",
  paddingBottom: "$6",
  gap: "$2",
  variants: { position: positionfooter },
});

export interface ModalProps {
  size?: keyof typeof size;
}

export interface ModalFooterProps {
  position?: keyof typeof positionfooter;
}
