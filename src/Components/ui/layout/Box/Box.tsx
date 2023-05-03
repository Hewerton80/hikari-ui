import classNames from "classnames";
import React, { forwardRef } from "react";
import { addClasseNamePrefix } from "../../../../utils/addClasseNamePrefix";

import * as Styled from "./Box.styles";
import { GlobalProps } from "../../../../types/GlobalProps";
import { Slot } from "@radix-ui/react-slot";

export interface BoxProps extends GlobalProps {
  asChild?: boolean;
}

export const Box = forwardRef(
  (
    { children, id, asChild, className, css, ...restProps }: BoxProps,
    ref?: any
  ) => {
    const Comp = asChild ? Slot : "div";

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
