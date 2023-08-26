import { twMerge } from "tailwind-merge";
import React from "react";
import { addClasseNamePrefix } from "../../../../utils/addClasseNamePrefix";
import { Slot } from "@radix-ui/react-slot";
import * as Styled from "./Text.styles";
import { GlobalProps } from "../../../../types/GlobalProps";

export interface TextProps extends GlobalProps {
  asChild?: boolean;
}

export function Text({
  children,
  id,
  asChild,
  className,
  css,
  ...restProps
}: TextProps) {
  const Comp = asChild ? Slot : "p";

  return (
    <Comp
      id={id}
      className={twMerge(
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
