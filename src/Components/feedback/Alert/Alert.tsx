import classNames from "classnames";
import React from "react";
import { addClasseNamePrefix } from "../../../utils/addClasseNamePrefix";
import * as Styled from "./Alert.styles";

export interface AlertProps extends GlobalProps, Styled.ContainerProps {}

export function Alert({
  children,
  className,
  variantStyle,
  ...restProps
}: AlertProps) {
  return (
    <div
      className={classNames(
        addClasseNamePrefix("alert"),
        Styled.Alert({ variantStyle }),
        className
      )}
      {...restProps}
    >
      <span>{children}</span>
    </div>
  );
}
