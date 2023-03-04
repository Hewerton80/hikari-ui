import classNames from "classnames";
import React from "react";
import { Spinner } from "../../feedback/Spinner/Spinner";
import * as Styled from "./Button.style";

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
