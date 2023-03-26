import classNames from "classnames";
import React from "react";
import { addClasseNamePrefix } from "../../../utils/addClasseNamePrefix";
import { CSS } from "../../../styles/theme";

import * as Styled from "./Box.styles";

export interface BoxProps extends Omit<GlobalProps, "css">, CSS {
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
  ...restProps
}: BoxProps) {
  const Comp = as;
  return (
    <Comp
      id={id}
      className={classNames(
        addClasseNamePrefix("box"),
        Styled.Box({ css: restProps }),
        className
      )}
    >
      {children}
    </Comp>
  );
}
