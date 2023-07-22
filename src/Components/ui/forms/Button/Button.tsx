import classNames from "classnames";
import React, { LegacyRef, MouseEvent, forwardRef } from "react";
import { Spinner } from "../../feedback/Spinner";
import * as Styled from "./Button.styles";
import { addClasseNamePrefix } from "../../../../utils/addClasseNamePrefix";
import { GlobalProps } from "../../../../types/GlobalProps";
import { Slot } from "@radix-ui/react-slot";

const buttonVariants = {
  style: {
    primary: classNames(
      "bg-purple-500 border-purple-500 text-white",
      "focus:ring-purple-500/40 active:ring-purple-500/40",
      "hover:bg-purple-600"
    ),
    secondary: classNames(
      "bg-gray-500 border-gray-500 text-white",
      "focus:ring-gray-500/40 active:ring-gray-500/40",
      "hover:bg-gray-600"
    ),
    danger: classNames(
      "bg-red-500 border-red-500 text-white",
      "focus:ring-red-500/40 active:ring-red-500/40",
      "hover:bg-red-600"
    ),
    success: classNames(
      "bg-green-500 border-green-500 text-white",
      "focus:ring-green-500/40 active:ring-green-500/40",
      "hover:bg-green-600"
    ),
    info: classNames(
      "bg-blue-500 border-blue-500 text-white",
      "focus:ring-blue-500/40 active:ring-blue-500/40",
      "hover:bg-blue-600"
    ),
    warning: classNames(
      "bg-yellow-500 border-yellow-500 text-white",
      "focus:ring-yellow-500/40 active:ring-yellow-500/40",
      "hover:bg-yellow-600"
    ),
    light: classNames(
      "bg-slate-200 border-slate-200 text-black",
      "focus:ring-slate-200/40 active:ring-slate-200/40",
      "hover:bg-slate-300",
      "dark:bg-slate-600 dark:border-slate-600 dark:text-white",
      "dark:ring-slate-600/40 dark:active:ring-slate-600/40",
      "dark:hover:bg-slate-700"
    ),
    dark: classNames(
      "bg-slate-800 border-slate-800 text-white",
      "focus:ring-slate-800/40 active:ring-slate-800/40",
      "hover:bg-slate-900"
      // "dark:bg-slate-200 dark:border-slate-200 dark:text-black",
      // "dark:focus:ring-slate-200/40 dark:active:ring-slate-200/40",
      // "dark:hover:bg-slate-300"
    ),
    "primary-outlined": classNames(
      "bg-transparent border-purple-500 text-purple-500",
      "focus:ring-purple-500/40 active:ring-purple-500/40",
      "hover:bg-purple-500 hover:text-white"
    ),
    "secondary-outlined": classNames(
      "bg-transparent border-gray-500 text-gray-500",
      "focus:ring-gray-500/40 active:ring-gray-500/40",
      "hover:bg-gray-500 hover:text-white"
    ),
    "danger-outlined": classNames(
      "bg-transparent border-red-500 text-red-500",
      "focus:ring-red-500/40 active:ring-red-500/40",
      "hover:bg-red-500 hover:text-white"
    ),
    "success-outlined": classNames(
      "bg-transparent border-green-500 text-green-500",
      "focus:ring-green-500/40 active:ring-green-500/40",
      "hover:bg-green-500 hover:text-white"
    ),
    "info-outlined": classNames(
      "bg-transparent border-blue-500 text-blue-500",
      "focus:ring-blue-500/40 active:ring-blue-500/40",
      "hover:bg-blue-500 hover:text-white"
    ),
    "warning-outlined": classNames(
      "bg-transparent border-yellow-500 text-yellow-500",
      "focus:ring-yellow-500/40 active:ring-yellow-500/40",
      "hover:bg-yellow-500 hover:text-white"
    ),
    "light-outlined": classNames(
      "bg-transparent border-slate-200 text-slate-200",
      "focus:ring-slate-200/40 active:ring-slate-200/40",
      "hover:bg-slate-200 hover:text-black",
      "dark:border-slate-600 dark:text-slate-600",
      "dark:focus:ring-slate-600/40 dark:active:ring-slate-600/40",
      "dark:hover:bg-slate-600 dark:hover:text-white"
    ),
    "dark-outlined": classNames(
      "bg-transparent border-slate-800 text-slate-800",
      "focus:ring-slate-800/40 active:ring-slate-800/40",
      "hover:bg-slate-900 hover:text-white"
    ),
  },
};

type ButtonVariantStyle = keyof typeof buttonVariants.style;

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
