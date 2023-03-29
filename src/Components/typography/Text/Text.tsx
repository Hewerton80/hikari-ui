import classNames from "classnames";
import React from "react";
import { addClasseNamePrefix } from "../../../utils/addClasseNamePrefix";

import * as Styled from "./Text.styles";

export interface TextProps extends GlobalProps {
  as?:
    | "p"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "span"
    | "abbr"
    | "address"
    | "b"
    | "cite"
    | "code"
    | "em"
    | "q"
    | "s";
}

export function Text({
  children,
  id,
  as = "p",
  className,
  css,
  ...restProps
}: TextProps) {
  const Comp = as;
  return (
    <Comp
      id={id}
      className={classNames(
        addClasseNamePrefix("text"),
        Styled.Text({ css }),
        className
      )}
      {...restProps}
    >
      {children}
    </Comp>
  );
}
