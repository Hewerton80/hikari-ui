import classNames from "classnames";
import React from "react";
import { Spinner } from "../Spinner/Spinner";
import * as Styled from "./Button.style";

export const buttonVariants = {
  primary: {
    root: "border-primary",
    hover: "hover:bg-active-primary hover:shadow-sm hover:shadow-primary",
    active:
      "active:bg-active-primary focus:ring-primary/40 active:ring-primary/40",
    contained: "bg-primary text-white",
    outline: "bg-transparent text-primary hover:bg-primary hover:text-white",
    texted: "bg-transparent text-primary",
  },
};

interface ButtonProps extends Styled.IConteinerProps, GlobalProps {
  disabled?: boolean;
  isLoading?: boolean;
}

export function Button({
  children,
  className,
  variantColor = "primary",
  size = "md",
  variantStyle = "contained",
  disabled,
  isLoading,
  ...restProps
}: ButtonProps) {
  return (
    <Styled.Container
      className={classNames("btn", className)}
      disabled={disabled || isLoading}
      variantColor={variantColor}
      size={size}
      variantStyle={variantStyle}
      {...restProps}
    >
      {isLoading ? (
        <Spinner
          color={Styled.buttonVariants[variantColor][variantStyle].spinnerColor}
        />
      ) : (
        children
      )}
    </Styled.Container>
  );
}
