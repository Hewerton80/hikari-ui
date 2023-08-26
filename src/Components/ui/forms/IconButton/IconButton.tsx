import React, { forwardRef } from "react";
import { Button, ButtonProps } from "../Button";
import { twMerge } from "tailwind-merge";
import * as Styled from "./IconButton.styles";
import { addClasseNamePrefix } from "../../../../utils/addClasseNamePrefix";

type ButtonPropsOmited = Omit<
  ButtonProps,
  "leftIcon" | "rightIcon" | "children" | "fullWidth" | "size" | "rounded"
>;

export interface IconButtonProps
  extends ButtonPropsOmited,
    Styled.IconButtonProps {
  icon?: JSX.Element;
}

export const IconButton = forwardRef(
  (
    { icon, className, size = "md", css, ...restProps }: IconButtonProps,
    ref?: any
  ) => {
    return (
      <Button
        className={twMerge(
          addClasseNamePrefix("icon-btn"),
          Styled.IconButton({ css, size }),
          className
        )}
        ref={ref}
        {...restProps}
      >
        {icon}
      </Button>
    );
  }
);
