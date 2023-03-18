import classNames from "classnames";
import React from "react";
import { Spinner } from "../../feedback/Spinner/Spinner";
import * as Styled from "./Button.styles";
import { addClasseNamePrefix } from "../../../utils/addClasseNamePrefix";

export interface ButtonProps extends Styled.ButtonProps, GlobalProps {
  disabled?: boolean;
  isLoading?: boolean;
  fullWidth?: boolean;
  rounded?: boolean;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  onClick?: () => void;
}

export function Button({
  children,
  className,
  size = "md",
  variantStyle = "primary-contained",
  fullWidth,
  rounded,
  leftIcon,
  rightIcon,
  disabled,
  isLoading,
  css,
  ...restProps
}: ButtonProps) {
  return (
    <button
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
      {...restProps}
    >
      {isLoading ? (
        <Spinner
        // color={Styled.variantStyle[variantStyle].color}
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
