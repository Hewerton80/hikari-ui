import { css, keyframes } from "../../../../styles/theme";

const ldsRing2 = keyframes({
  "0%": {
    transform: "rotate(0deg)",
  },
  "100%": {
    transform: "rotate(360deg)",
  },
});

export const Spinner = css("span", {
  display: "inline-block",
  position: "relative",
  span: {
    animation: `${ldsRing2} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite`,
  },
  "span:nth-child(1)": {
    animationDelay: "-0.45s",
  },
  "span:nth-child(2)": {
    animationDelay: "-0.3s",
  },
  "span:nth-child(3)": {
    animationDelay: "-0.15s",
  },
});
