import classNames from "classnames";
import React from "react";
import { addClasseNamePrefix } from "../../../../utils/addClasseNamePrefix";

import * as Styled from "./Box.styles";
import { GlobalProps } from "../../../../types/GlobalProps";

export interface BoxProps extends GlobalProps {
  as?:
    | "div"
    | "span"
    | "section"
    | "article"
    | "main"
    | "aside"
    | "header"
    | "footer"
    | "figure"
    | "figcaption"
    | "nav";
}

export function Box({
  children,
  id,
  as = "div",
  className,
  css,
  ...restProps
}: BoxProps) {
  const Comp = as;
  return (
    <Comp
      id={id}
      className={classNames(
        addClasseNamePrefix("box"),
        Styled.Box({ css }),
        className
      )}
      {...restProps}
    >
      {children}
    </Comp>
  );
}
