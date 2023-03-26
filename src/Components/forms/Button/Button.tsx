import classNames from "classnames";
import React from "react";
import { Spinner } from "../../feedback/Spinner/Spinner";
import * as Styled from "./Button.styles";
import { addClasseNamePrefix } from "../../../utils/addClasseNamePrefix";

export interface ButtonProps<T extends "button" | "link" = undefined>
  extends Styled.ButtonProps,
    GlobalProps {
  as?: T;
  type?: T extends "link" ? undefined : "button" | "reset" | "submit";
  href?: T extends "link" ? string : undefined;
  target?: T extends "link"
    ? "_blank" | "_parent" | "_self" | "_top"
    : undefined;
  isLoading?: boolean;
  fullWidth?: boolean;
  rounded?: boolean;
  disabled?: boolean;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  onClick?: (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>
  ) => void;
}

export function Button<T extends "button" | "link" | undefined>({
  children,
  className,
  size = "md",
  as,
  variantStyle = "primary",
  fullWidth,
  rounded,
  leftIcon,
  rightIcon,
  disabled,
  isLoading,
  css,
  ...restProps
}: ButtonProps<T>) {
  const Component = as === "link" ? "a" : "button";

  return (
    <Component
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
    </Component>
  );
}
