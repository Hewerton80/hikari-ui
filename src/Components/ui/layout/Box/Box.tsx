import classNames from "classnames";
import React, { forwardRef } from "react";
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

export const Box = forwardRef(
  (
    { children, id, as = "div", className, css, ...restProps }: BoxProps,
    ref?: any
  ) => {
    const Comp = as;

    return (
      <Comp
        ref={ref}
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
);
