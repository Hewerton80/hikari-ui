import { css, CSS, keyframes } from "../../../styles/theme";

export type VariantsTypes = "success" | "info" | "warning" | "danger";

type VariantsStylesMap = {
  [Property in VariantsTypes]: CSS;
};

const alertShow = keyframes({
  "0%": {
    transform: "translate(-50%, -50%) scale(0.7)",
  },
  "45%": {
    transform: "translate(-50%, -50%) scale(1.05)",
  },
  "80%": {
    transform: "translate(-50%, -50%) scale(0.95)",
  },
  "100%": {
    transform: "translate(-50%, -50%) scale(1)",
  },
});

export const alertCss: CSS = {
  animation: `${alertShow} .3s`,
};

const variant: VariantsStylesMap = {
  success: { color: "$success" },
  info: { color: "$info" },
  warning: { color: "$warning" },
  danger: { color: "$danger" },
};

export const Content = css("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  spaceY: "$3",
});

export const Icon = css("svg", {
  text: "7xl",
  variants: { variant },
});

export const Title = css("div", {
  text: "lg",
  textAlign: "center",
  variants: { variant },
});

export interface AlertModalProps {
  variant?: VariantsTypes;
}
