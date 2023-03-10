import classNames from "classnames";
import React from "react";
import { addClasseNamePrefix } from "../../../utils/addClasseNamePrefix";

import * as Styled from "./Grid.styles";

export interface GridProps extends GlobalProps, Styled.GridContainerProps {}
export interface ColProps extends GlobalProps, Styled.ColContainerProps {}

function Grid({ children, numCols = 12, className, ...restProps }: GridProps) {
  return (
    <Styled.GridContainer
      className={classNames(addClasseNamePrefix("grid"), className)}
      numCols={numCols}
      {...restProps}
    >
      {children}
    </Styled.GridContainer>
  );
}

function Col({ children, className, ...restProps }: ColProps) {
  return (
    <Styled.ColContainer
      className={classNames(addClasseNamePrefix("col"), className)}
      {...restProps}
    >
      {children}
    </Styled.ColContainer>
  );
}

Grid.Col = Col;

export { Grid };
