import { css, keyframes } from "../../../../styles/theme";

const ldsRing2 = keyframes({
  "0%": {
    transform: "rotate(0deg)",
  },
  "100%": {
    transform: "rotate(360deg)",
  },
});

export const Spinner = css("div", {
  display: "inline-block",
  position: "relative",
  div: {
    display: "block",
    position: "absolute",
    borderRadius: "50%",
    animation: `${ldsRing2} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite`,
  },
  "div:nth-child(1)": {
    animationDelay: "-0.45s",
  },
  "div:nth-child(2)": {
    animationDelay: "-0.3s",
  },
  "div:nth-child(3)": {
    animationDelay: "-0.15s",
  },
});
