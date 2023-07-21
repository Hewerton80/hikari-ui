import classNames from "classnames";
import React, { LegacyRef, MouseEvent, forwardRef } from "react";
import { Spinner } from "../../feedback/Spinner";
import * as Styled from "./Button.styles";
import { addClasseNamePrefix } from "../../../../utils/addClasseNamePrefix";
import { GlobalProps } from "../../../../types/GlobalProps";
import { Slot } from "@radix-ui/react-slot";

export const buttonVariants = {
  style: {
    primary: classNames(
      "bg-purple-500 border-purple-500 text-white",
      "focus:ring-purple-500/40 active:ring-purple-500/40",
      "hover:bg-purple-600"
    ),
    secondary: classNames("bg-secondary"),
    danger: classNames("bg-red-500"),
    success: classNames("bg-green-500"),
    info: classNames("bg-blue-500"),
    warning: classNames("bg-yellow-500"),
    light: classNames("bg-light"),
    dark: classNames("bg-dark"),
  },
};

export type ButtonVariantStyle = keyof typeof buttonVariants.style;

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
    ref?: LegacyRef<HTMLButtonElement> & React.Ref<HTMLElement>
  ) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={classNames(
          addClasseNamePrefix("btn"),
          // Styled.Button({
          //   size,
          //   variantStyle,
          //   rounded: rounded ? "true" : "false",
          //   fullWidth: fullWidth ? "true" : "false",
          //   css,
          // }),
          "inline-flex items-center justify-center ease-linear duration-200",
          "text-sm px-6 h-11 w-fit cursor-pointer border rounded-[3px] outline-none",
          "disabled:pointer-events-none disabled:opacity-50",
          "focus:ring-4 active:ring-4",
          buttonVariants.style[variantStyle],
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
