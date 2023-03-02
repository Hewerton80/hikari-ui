import React from "react";
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

interface ButtonProps extends Styled.IConteinerProps {
  children?: React.ReactNode;
  disabled?: boolean;
}

export function Button({
  children,
  variantColor = "primary",
  size = "md",
  variantStyle = "contained",
  disabled,
}: ButtonProps) {
  return (
    <Styled.Container
      disabled={disabled}
      variantColor={variantColor}
      size={size}
      variantStyle={variantStyle}
    >
      {children}
    </Styled.Container>
  );
}
