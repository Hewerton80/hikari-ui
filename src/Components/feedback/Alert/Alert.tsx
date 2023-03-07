import classNames from "classnames";
import React from "react";
import { addClasseNamePrefix } from "../../../utils/addClasseNamePrefix";
import * as Styled from "./Alert.styles";

interface AlertProps extends GlobalProps, Styled.ContainerProps {}

export function Alert({ children, className, ...restProps }: AlertProps) {
  return (
    <Styled.Container
      className={classNames(addClasseNamePrefix("alert"), className)}
      {...restProps}
    >
      <span>{children}</span>
    </Styled.Container>
  );
}
