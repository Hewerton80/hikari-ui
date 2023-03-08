import React from "react";
import * as Styled from "./ButtonGroup.styles";
import classNames from "classnames";
import { addClasseNamePrefix } from "../../../utils/addClasseNamePrefix";

export interface ButtonGroupProps extends GlobalProps, Styled.ContainerProps {}

export function ButtonGroup({
  children,
  className,
  ...restProps
}: ButtonGroupProps) {
  return (
    <Styled.Container
      className={classNames(addClasseNamePrefix("btn-group"), className)}
      {...restProps}
    >
      {children}
    </Styled.Container>
  );
}
