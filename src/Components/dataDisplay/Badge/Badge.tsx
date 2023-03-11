import classNames from "classnames";
import React from "react";
import { addClasseNamePrefix } from "../../../utils/addClasseNamePrefix";

import * as Styled from "./Badge.styles";

export interface BadgeProps extends GlobalProps, Styled.ContainerProps {}

export function Badge({ className, children, ...restProps }: BadgeProps) {
  return (
    <Styled.Container
      className={classNames(addClasseNamePrefix("badge"))}
      {...restProps}
    >
      {children}
    </Styled.Container>
  );
}
