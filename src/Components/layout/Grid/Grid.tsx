import classNames from "classnames";
import React from "react";
import { addClasseNamePrefix } from "../../../utils/addClasseNamePrefix";

import * as Styled from "./Grid.styles";

interface GridProps extends GlobalProps, Styled.GridContainerProps {}
interface ColProps extends GlobalProps, Styled.ColContainerProps {}

export function Grid({ children, className, ...restProps }: GridProps) {
  return (
    <Styled.GridContainer
      className={classNames(addClasseNamePrefix("grid"), className)}
      {...restProps}
    >
      {children}
    </Styled.GridContainer>
  );
}

export function Col({ children, className, ...restProps }: ColProps) {
  return (
    <Styled.ColContainer
      aria-label=""
      className={classNames(addClasseNamePrefix("col"), className)}
      {...restProps}
    >
      {children}
    </Styled.ColContainer>
  );
}
