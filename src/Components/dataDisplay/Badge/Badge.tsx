import classNames from "classnames";
import React from "react";
import { addClasseNamePrefix } from "../../../utils/addClasseNamePrefix";

import * as Styled from "./Badge.styles";

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
        Styled.Badge({ variantStyle, css })
      )}
      {...restProps}
    >
      {children}
    </span>
  );
}
