import classNames from "classnames";
import React from "react";
import { addClasseNamePrefix } from "../../../utils/addClasseNamePrefix";
import { CSS } from "../../../styles/theme";

import * as Styled from "./Text.styles";

interface TextProps extends Omit<GlobalProps, "css">, CSS {
  as?:
    | "p"
    | "span"
    | "abbr"
    | "address"
    | "b"
    | "br"
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
  ...restProps
}: TextProps) {
  const Comp = as;
  return (
    <Comp
      id={id}
      className={classNames(
        addClasseNamePrefix("box"),
        Styled.Text({ css: restProps }),
        className
      )}
    >
      {children}
    </Comp>
  );
}
