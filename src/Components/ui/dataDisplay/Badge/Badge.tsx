import { twMerge } from "tailwind-merge";
import React from "react";
import { addClasseNamePrefix } from "../../../../utils/addClasseNamePrefix";

import * as Styled from "./Badge.styles";
import { GlobalProps } from "../../../../types/GlobalProps";

const StyledBadge = Styled.Badge;
const badgeVariantStyle = Styled.variantStyle;
export { StyledBadge, badgeVariantStyle };

export interface BadgeProps extends GlobalProps, Styled.BadgeProps {}
export function Badge({
  variantStyle = "primary",
  children,
  css,
  ...restProps
}: BadgeProps) {
  return (
    <span
      className={twMerge(
        addClasseNamePrefix("badge"),
        StyledBadge({ variantStyle, css })
      )}
      {...restProps}
    >
      {children}
    </span>
  );
}
