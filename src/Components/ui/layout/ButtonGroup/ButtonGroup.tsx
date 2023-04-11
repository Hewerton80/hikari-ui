import React from "react";
import * as Styled from "./ButtonGroup.styles";
import classNames from "classnames";
import { addClasseNamePrefix } from "../../../../utils/addClasseNamePrefix";
import { GlobalProps } from "../../../../types/GlobalProps";

export interface ButtonGroupProps extends GlobalProps {
  vertical?: boolean;
}

export function ButtonGroup({
  children,
  className,
  vertical,
  css,
  ...restProps
}: ButtonGroupProps) {
  return (
    <div
      className={classNames(
        addClasseNamePrefix("btn-group"),
        Styled.ButtonGroup({ vertical: vertical ? "true" : "false", css }),
        className
      )}
      {...restProps}
    >
      {children}
    </div>
  );
}
