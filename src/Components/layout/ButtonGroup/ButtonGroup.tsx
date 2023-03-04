import React from "react";
import * as Styled from "./ButtonGroup.style";
import classNames from "classnames";

interface ButtonGroupProps extends GlobalProps, Styled.ContainerProps {}

export function ButtonGroup({
  children,
  className,
  ...restProps
}: ButtonGroupProps) {
  return (
    <Styled.Container
      className={classNames("btn-group", className)}
      {...restProps}
    >
      {children}
    </Styled.Container>
  );
}
