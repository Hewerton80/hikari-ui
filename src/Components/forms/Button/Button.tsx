import classNames from "classnames";
import React from "react";
import { Spinner } from "../../feedback/Spinner/Spinner";
import * as Styled from "./Button.styles";
import { addClasseNamePrefix } from "../../../utils/addClasseNamePrefix";

export interface ButtonProps extends Styled.ButtonProps, GlobalProps {
  disabled?: boolean;
  isLoading?: boolean;
  fullWidth?: boolean;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
}

export function Button({
  children,
  className,
  size = "md",
  variantStyle = "primary-contained",
  leftIcon,
  rightIcon,
  disabled,
  isLoading,
  style,
  ...restProps
}: ButtonProps) {
  return (
    <button
      className={classNames(
        addClasseNamePrefix("btn"),
        Styled.Button({
          size,
          variantStyle,
        }),
        className
      )}
      disabled={disabled || isLoading}
      {...restProps}
    >
      {isLoading ? (
        <Spinner
        // color={Styled.buttonVariants[variantColor][variantStyle].spinnerColor}
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
    </button>
  );
}
