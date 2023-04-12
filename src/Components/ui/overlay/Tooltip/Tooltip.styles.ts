import { css, keyframes } from "../../../../styles/theme";
import { spaces } from "../../../../styles/spaces";
import { StyledBadge, badgeVariantStyle } from "../../dataDisplay/Badge";
import { orientationStyle } from "../../../commonStyles/variantOrientationStyle";

const slideAndFade = keyframes({
  "0%": { opacity: 0, transform: "scale(0.75)" },
  "100%": { opacity: 1, transform: "scale(1)" },
});

const tooltipSize = {
  auto: { maxWidth: "fit-content" },
  sm: { maxWidth: spaces["48"] },
  md: { maxWidth: spaces["80"] },
  lg: { maxWidth: spaces["128"] },
};

export const Tooltip = css(StyledBadge, {
  variants: { size: tooltipSize },
});

export const TooltipeAnimation = css("", {
  animationDuration: "300ms",
  animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
  animationName: `${slideAndFade}`,
});

export interface TooltipProps {
  variantStyle?: keyof typeof badgeVariantStyle;
  orientation?: keyof typeof orientationStyle;
  size?: keyof typeof tooltipSize;
}
