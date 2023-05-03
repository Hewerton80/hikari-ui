import classNames from "classnames";
import React, { MouseEvent, forwardRef } from "react";
import { Spinner } from "../../feedback/Spinner";
import * as Styled from "./Button.styles";
import { addClasseNamePrefix } from "../../../../utils/addClasseNamePrefix";
import { GlobalProps } from "../../../../types/GlobalProps";
import { Slot } from "@radix-ui/react-slot";
export interface ButtonProps extends Styled.ButtonProps, GlobalProps {
  asChild?: boolean;
  isLoading?: boolean;
  fullWidth?: boolean;
  rounded?: boolean;
  disabled?: boolean;
  type?: "submit" | "reset" | "button";
  // leftIcon?: JSX.Element;
  // rightIcon?: JSX.Element;
  onClick?: (e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
}

export const Button = forwardRef(
  (
    {
      children,
      className,
      size = "md",
      asChild,
      variantStyle = "info",
      fullWidth,
      rounded,
      // leftIcon,
      // rightIcon,
      disabled,
      isLoading,
      css,
      ...restProps
    }: ButtonProps,
    ref?: any
  ) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={classNames(
          addClasseNamePrefix("btn"),
          Styled.Button({
            size,
            variantStyle,
            rounded: rounded ? "true" : "false",
            fullWidth: fullWidth ? "true" : "false",
            css,
          }),
          className
        )}
        disabled={disabled || isLoading}
        ref={ref}
        {...restProps}
      >
        {isLoading ? <Spinner /> : children}
      </Comp>
    );
  }
);
