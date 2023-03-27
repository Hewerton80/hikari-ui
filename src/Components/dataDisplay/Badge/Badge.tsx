import classNames from "classnames";
import React from "react";
import { addClasseNamePrefix } from "../../../utils/addClasseNamePrefix";

import * as Styled from "./Badge.styles";

const StyledBadge = Styled.Badge;
const badgeVariantStyle = Styled.variantStyle;
export { StyledBadge, badgeVariantStyle };

export interface BadgeProps extends GlobalProps, Styled.BadgeProps {}
export function Badge({
  className,
  variantStyle = "primary",
  children,
  css,
  ...restProps
}: BadgeProps) {
  return (
    <span
      className={classNames(
        addClasseNamePrefix("badge"),
        StyledBadge({ variantStyle, css })
      )}
      {...restProps}
    >
      {children}
    </span>
  );
}
