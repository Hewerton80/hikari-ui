import classNames from "classnames";
import React from "react";
import { Spinner } from "../../feedback/Spinner/Spinner";
import * as Styled from "./Button.styles";
import { addClasseNamePrefix } from "../../../utils/addClasseNamePrefix";

interface NativeButtonProps
  extends Pick<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    "type" | "onClick" | "disabled"
  > {}

export interface ButtonProps
  extends Styled.ButtonProps,
    GlobalProps,
    NativeButtonProps {
  isLoading?: boolean;
  fullWidth?: boolean;
  asChild?: boolean;
  rounded?: boolean;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
}

export function Button({
  children,
  className,
  size = "md",
  asChild,
  variantStyle = "primary",
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
