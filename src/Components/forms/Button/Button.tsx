import classNames from "classnames";
import React from "react";
import { Spinner } from "../../feedback/Spinner/Spinner";
import * as Styled from "./Button.styles";
import { addClasseNamePrefix } from "../../../utils/addClasseNamePrefix";

export interface ButtonProps extends Styled.ConteinerProps, GlobalProps {
  disabled?: boolean;
  isLoading?: boolean;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
}

export function Button({
  children,
  className,
  variantColor = "primary",
  size = "md",
  variantStyle = "contained",
  leftIcon,
  rightIcon,
  disabled,
  isLoading,
  ...restProps
}: ButtonProps) {
  return (
    <Styled.Container
      className={classNames(addClasseNamePrefix("btn"), className)}
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
        <>
          {leftIcon && (
            <span className={addClasseNamePrefix("btn-left-icon")}>
              {leftIcon}
            </span>
          )}
          {children}
          {rightIcon && (
            <span className={addClasseNamePrefix("btn-right-icon")}>
              {rightIcon}
            </span>
          )}
        </>
      )}
    </Styled.Container>
  );
}
