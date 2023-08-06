import classNames from "classnames";
import React, {
  Children,
  LegacyRef,
  MouseEvent,
  forwardRef,
  createElement,
  useMemo,
  ReactNode,
  Fragment,
} from "react";
import { Spinner } from "../../feedback/Spinner";
import * as Styled from "./Button.styles";
import { addClasseNamePrefix } from "../../../../utils/addClasseNamePrefix";
import { GlobalProps } from "../../../../types/GlobalProps";
import { Slot } from "@radix-ui/react-slot";

interface ButtonStyle {
  bg: string;
  border: string;
  text: string;
  focusRing?: string;
  activeRing?: string;
  hoverBg?: string;
  hoverText?: string;
  spinnerBorderT: string;
  darkStyles?: string[];
}

const generateButtonStyles = (baseStyles: ButtonStyle) => {
  const {
    bg,
    border,
    text,
    focusRing,
    activeRing,
    hoverBg,
    spinnerBorderT,
    hoverText,
    darkStyles,
  } = baseStyles;
  const commonClasses = [
    bg,
    border,
    text,
    activeRing,
    focusRing,
    hoverBg,
    spinnerBorderT,
    hoverText,
    darkStyles,
  ];

  if (darkStyles) {
    commonClasses.push(...darkStyles);
  }

  return classNames(...commonClasses);
};

export const buttonVariants = {
  style: {
    primary: generateButtonStyles({
      bg: "bg-purple-500",
      border: "border-purple-500",
      text: "text-white",
      focusRing: "focus:ring-purple-500/40",
      activeRing: "active:ring-purple-500/40",
      hoverBg: "hover:bg-purple-600",
      spinnerBorderT: "[&>.hikari-spinner>span]:border-t-white",
    }),
    secondary: generateButtonStyles({
      bg: "bg-gray-500",
      border: "border-gray-500",
      text: "text-white",
      focusRing: "focus:ring-gray-500/40",
      activeRing: "active:ring-gray-500/40",
      hoverBg: "hover:bg-gray-600",
      spinnerBorderT: "[&>.hikari-spinner>span]:border-t-white",
    }),
    danger: generateButtonStyles({
      bg: "bg-red-500",
      border: "border-red-500",
      text: "text-white",
      focusRing: "focus:ring-red-500/40",
      activeRing: "active:ring-red-500/40",
      hoverBg: "hover:bg-red-600",
      spinnerBorderT: "[&>.hikari-spinner>span]:border-t-white",
    }),
    success: generateButtonStyles({
      bg: "bg-green-500",
      border: "border-green-500",
      text: "text-white",
      focusRing: "focus:ring-green-500/40",
      activeRing: "active:ring-green-500/40",
      hoverBg: "hover:bg-green-600",
      spinnerBorderT: "[&>.hikari-spinner>span]:border-t-white",
    }),
    info: generateButtonStyles({
      bg: "bg-blue-500",
      border: "border-blue-500",
      text: "text-white",
      focusRing: "focus:ring-blue-500/40",
      activeRing: "active:ring-blue-500/40",
      hoverBg: "hover:bg-blue-600",
      spinnerBorderT: "[&>.hikari-spinner>span]:border-t-white",
    }),
    warning: generateButtonStyles({
      bg: "bg-yellow-500",
      border: "border-yellow-500",
      text: "text-white",
      focusRing: "focus:ring-yellow-500/40",
      activeRing: "active:ring-yellow-500/40",
      hoverBg: "hover:bg-yellow-600",
      spinnerBorderT: "[&>.hikari-spinner>span]:border-t-white",
    }),
    dark: generateButtonStyles({
      bg: "bg-slate-800",
      border: "border-slate-800",
      text: "text-white",
      focusRing: "focus:ring-slate-800/40",
      activeRing: "active:ring-slate-800/40",
      hoverBg: "hover:bg-slate-900",
      spinnerBorderT: "[&>.hikari-spinner>span]:border-t-white",
    }),
    "primary-outlined": generateButtonStyles({
      bg: "bg-transparent",
      border: "border-purple-500",
      text: "text-purple-500",
      focusRing: "focus:ring-purple-500/40",
      activeRing: "active:ring-purple-500/40",
      hoverBg: "hover:bg-purple-500",
      hoverText: "hover:text-white",
      spinnerBorderT: "[&>.hikari-spinner>span]:border-t-purple-500",
    }),
    "secondary-outlined": generateButtonStyles({
      bg: "bg-transparent",
      border: "border-gray-500",
      text: "text-gray-500",
      focusRing: "focus:ring-gray-500/40",
      activeRing: "active:ring-gray-500/40",
      hoverBg: "hover:bg-gray-500",
      hoverText: "hover:text-white",
      spinnerBorderT: "[&>.hikari-spinner>span]:border-t-gray-500",
    }),
    "danger-outlined": generateButtonStyles({
      bg: "bg-transparent",
      border: "border-red-500",
      text: "text-red-500",
      focusRing: "focus:ring-red-500/40",
      activeRing: "active:ring-red-500/40",
      hoverBg: "hover:bg-red-600",
      hoverText: "hover:text-white",
      spinnerBorderT: "[&>.hikari-spinner>span]:border-t-red-500",
    }),
    "success-outlined": generateButtonStyles({
      bg: "bg-transparent",
      border: "border-green-500",
      text: "text-green-500",
      focusRing: "focus:ring-green-500/40",
      activeRing: "active:ring-green-500/40",
      hoverBg: "hover:bg-green-600",
      hoverText: "hover:text-white",
      spinnerBorderT: "[&>.hikari-spinner>span]:border-t-green-600",
    }),
    "info-outlined": generateButtonStyles({
      bg: "bg-transparent",
      border: "border-blue-500",
      text: "text-blue-500",
      focusRing: "focus:ring-blue-500/40",
      activeRing: "active:ring-blue-500/40",
      hoverBg: "hover:bg-blue-600",
      hoverText: "hover:text-white",
      spinnerBorderT: "[&>.hikari-spinner>span]:border-t-blue-600",
    }),
    "warning-outlined": generateButtonStyles({
      bg: "bg-transparent",
      border: "border-yellow-500",
      text: "text-yellow-500",
      focusRing: "focus:ring-yellow-500/40",
      activeRing: "active:ring-yellow-500/40",
      hoverBg: "hover:bg-yellow-600",
      hoverText: "hover:text-white",
      spinnerBorderT: "[&>.hikari-spinner>span]:border-t-yellow-500",
    }),
    "dark-outlined": generateButtonStyles({
      bg: "bg-transparent",
      border: "border-slate-800",
      text: "text-slate-800",
      focusRing: "focus:ring-slate-800/40",
      activeRing: "active:ring-slate-800/40",
      hoverBg: "hover:bg-slate-900",
      hoverText: "hover:text-white",
      spinnerBorderT: "[&>.hikari-spinner>span]:border-t-slate-900",
    }),
    "primary-soft": generateButtonStyles({
      bg: "bg-purple-500/20",
      border: "border-transparent",
      text: "text-purple-500",
      focusRing: "focus:ring-purple-500/40",
      activeRing: "active:ring-purple-500/40",
      hoverBg: "hover:bg-purple-500",
      hoverText: "hover:text-white",
      spinnerBorderT: "[&>.hikari-spinner>span]:border-t-purple-500",
    }),
    "secondary-soft": generateButtonStyles({
      bg: "bg-gray-500/20",
      border: "border-transparent",
      text: "text-gray-500",
      focusRing: "focus:ring-gray-500/40",
      activeRing: "active:ring-gray-500/40",
      hoverBg: "hover:bg-gray-500",
      hoverText: "hover:text-white",
      spinnerBorderT: "[&>.hikari-spinner>span]:border-t-gray-500",
    }),
    "danger-soft": generateButtonStyles({
      bg: "bg-red-500/20",
      border: "border-transparent",
      text: "text-red-500",
      focusRing: "focus:ring-red-500/40",
      activeRing: "active:ring-red-500/40",
      hoverBg: "hover:bg-red-500",
      hoverText: "hover:text-white",
      spinnerBorderT: "[&>.hikari-spinner>span]:border-t-red-500",
    }),
    "success-soft": generateButtonStyles({
      bg: "bg-green-500/20",
      border: "border-transparent",
      text: "text-green-500",
      focusRing: "focus:ring-green-500/40",
      activeRing: "active:ring-green-500/40",
      hoverBg: "hover:bg-green-500",
      hoverText: "hover:text-white",
      spinnerBorderT: "[&>.hikari-spinner>span]:border-t-green-500",
    }),
    "info-soft": generateButtonStyles({
      bg: "bg-blue-500/20",
      border: "border-transparent",
      text: "text-blue-500",
      focusRing: "focus:ring-blue-500/40",
      activeRing: "active:ring-blue-500/40",
      hoverBg: "hover:bg-blue-500",
      hoverText: "hover:text-white",
      spinnerBorderT: "[&>.hikari-spinner>span]:border-t-blue-500",
    }),
    "warning-soft": generateButtonStyles({
      bg: "bg-yellow-500/20",
      border: "border-transparent",
      text: "text-yellow-500",
      focusRing: "focus:ring-yellow-500/40",
      activeRing: "active:ring-yellow-500/40",
      hoverBg: "hover:bg-yellow-500",
      hoverText: "hover:text-white",
      spinnerBorderT: "[&>.hikari-spinner>span]:border-t-yellow-500",
    }),
    "dark-soft": generateButtonStyles({
      bg: "bg-slate-800/20",
      border: "border-transparent",
      text: "text-slate-800",
      focusRing: "focus:ring-slate-800/40",
      activeRing: "active:ring-slate-800/40",
      hoverBg: "hover:bg-slate-800",
      hoverText: "hover:text-white",
      spinnerBorderT: "[&>.hikari-spinner>span]:border-t-slate-800",
    }),
    "primary-ghost": generateButtonStyles({
      bg: "bg-transparent",
      border: "border-transparent",
      text: "text-purple-500",
      focusRing: "focus:ring-purple-500/40",
      activeRing: "active:ring-purple-500/40",
      hoverBg: "hover:bg-purple-500/20",
      spinnerBorderT: "[&>.hikari-spinner>span]:border-t-purple-500",
    }),
    "secondary-ghost": generateButtonStyles({
      bg: "bg-transparent",
      border: "border-transparent",
      text: "text-gray-500",
      focusRing: "focus:ring-gray-500/40",
      activeRing: "active:ring-gray-500/40",
      hoverBg: "hover:bg-gray-500/20",
      spinnerBorderT: "[&>.hikari-spinner>span]:border-t-gray-500",
    }),
    "danger-ghost": generateButtonStyles({
      bg: "bg-transparent",
      border: "border-transparent",
      text: "text-red-500",
      focusRing: "focus:ring-red-500/40",
      activeRing: "active:ring-red-500/40",
      hoverBg: "hover:bg-red-500/20",
      spinnerBorderT: "[&>.hikari-spinner>span]:border-t-red-500",
    }),
    "success-ghost": generateButtonStyles({
      bg: "bg-transparent",
      border: "border-transparent",
      text: "text-green-500",
      focusRing: "focus:ring-green-500/40",
      activeRing: "active:ring-green-500/40",
      hoverBg: "hover:bg-green-500/20",
      spinnerBorderT: "[&>.hikari-spinner>span]:border-t-green-500",
    }),
    "info-ghost": generateButtonStyles({
      bg: "bg-transparent",
      border: "border-transparent",
      text: "text-blue-500",
      focusRing: "focus:ring-blue-500/40",
      activeRing: "active:ring-blue-500/40",
      hoverBg: "hover:bg-blue-500/20",
      spinnerBorderT: "[&>.hikari-spinner>span]:border-t-blue-500",
    }),
    "warning-ghost": generateButtonStyles({
      bg: "bg-transparent",
      border: "border-transparent",
      text: "text-yellow-500",
      focusRing: "focus:ring-yellow-500/40",
      activeRing: "active:ring-yellow-500/40",
      hoverBg: "hover:bg-yellow-500/20",
      spinnerBorderT: "[&>.hikari-spinner>span]:border-t-yellow-500",
    }),
    "dark-ghost": generateButtonStyles({
      bg: "bg-transparent",
      border: "border-transparent",
      text: "text-slate-800",
      focusRing: "focus:ring-slate-800/40",
      activeRing: "active:ring-slate-800/40",
      hoverBg: "hover:bg-slate-900/20",
      spinnerBorderT: "[&>.hikari-spinner>span]:border-t-slate-900",
    }),
    "primary-link": generateButtonStyles({
      bg: "bg-transparent",
      border: "border-transparent",
      text: "text-purple-500",
      focusRing: "focus:ring-purple-500/0",
      activeRing: "active:ring-purple-500/0",
      hoverText: "hover:underline",
      spinnerBorderT: "[&>.hikari-spinner>span]:border-t-purple-500",
    }),
    "secondary-link": generateButtonStyles({
      bg: "bg-transparent",
      border: "border-transparent",
      text: "text-gray-500",
      focusRing: "focus:ring-gray-500/0",
      activeRing: "active:ring-gray-500/0",
      hoverText: "hover:underline",
      spinnerBorderT: "[&>.hikari-spinner>span]:border-t-gray-500",
    }),
    "danger-link": generateButtonStyles({
      bg: "bg-transparent",
      border: "border-transparent",
      text: "text-red-500",
      focusRing: "focus:ring-red-500/0",
      activeRing: "active:ring-red-500/0",
      hoverText: "hover:underline",
      spinnerBorderT: "[&>.hikari-spinner>span]:border-t-red-500",
    }),
    "success-link": generateButtonStyles({
      bg: "bg-transparent",
      border: "border-transparent",
      text: "text-green-500",
      focusRing: "focus:ring-green-500/0",
      activeRing: "active:ring-green-500/0",
      hoverText: "hover:underline",
      spinnerBorderT: "[&>.hikari-spinner>span]:border-t-green-500",
    }),
    "info-link": generateButtonStyles({
      bg: "bg-transparent",
      border: "border-transparent",
      text: "text-blue-500",
      focusRing: "focus:ring-blue-500/0",
      activeRing: "active:ring-blue-500/0",
      hoverText: "hover:underline",
      spinnerBorderT: "[&>.hikari-spinner>span]:border-t-blue-500",
    }),
    "warning-link": generateButtonStyles({
      bg: "bg-transparent",
      border: "border-transparent",
      text: "text-yellow-500",
      focusRing: "focus:ring-yellow-500/0",
      activeRing: "active:ring-yellow-500/0",
      hoverText: "hover:underline",
      spinnerBorderT: "[&>.hikari-spinner>span]:border-t-yellow-500",
    }),
    "dark-link": generateButtonStyles({
      bg: "bg-transparent",
      border: "border-transparent",
      text: "text-slate-800",
      focusRing: "focus:ring-slate-800/0",
      activeRing: "active:ring-slate-800/0",
      hoverText: "hover:underline",
      spinnerBorderT: "[&>.hikari-spinner>span]:border-t-slate-800",
    }),

    // Define other variants in a similar manner
  },
  size: {
    lg: "px-[1.2rem] py-[.7rem] text-base",
    md: "px-[.7rem] py-2 text-sm",
    sm: "px-2 py-1 text-xs",
  },
};

export type ButtonVariantStyle = keyof typeof buttonVariants.style;
export type ButtonVariantSize = keyof typeof buttonVariants.size;

export interface ButtonProps
  extends Omit<Styled.ButtonProps, "variantStyle" | "size">,
    GlobalProps {
  asChild?: boolean;
  isLoading?: boolean;
  fullWidth?: boolean;
  rounded?: boolean;
  disabled?: boolean;
  type?: "submit" | "reset" | "button";
  variantStyle?: ButtonVariantStyle;
  size?: ButtonVariantSize;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
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
      disabled,
      isLoading,
      leftIcon,
      rightIcon,
      ...restProps
    }: ButtonProps,
    ref?: LegacyRef<HTMLButtonElement> & React.Ref<HTMLElement>
  ) => {
    const Comp = asChild ? Slot : "button";

    // const result = Children.toArray(children);
    // const teste = result[0];

    const handledChildren = useMemo(() => {
      let handledChildrenTmp: ReactNode = Children.toArray(
        children || <></>
      )[0];

      const hasIcon = leftIcon || rightIcon;
      if (hasIcon) {
        console.log("handledChildrenTmp", handledChildrenTmp);
        const childrenIsTag = typeof handledChildrenTmp === "object";
        const ChildrenComp = Object(handledChildrenTmp);
        handledChildrenTmp = createElement(
          childrenIsTag ? ChildrenComp?.type : Fragment,
          ChildrenComp?.props || {},
          <>
            {leftIcon && <span className="mr-4">{leftIcon}</span>}
            {isLoading ? (
              <Spinner />
            ) : (
              ChildrenComp?.props?.children || children
            )}
            {rightIcon && <span className="ml-4">{rightIcon}</span>}
          </>
        );
      }

      return handledChildrenTmp;
    }, [children, leftIcon, rightIcon, isLoading]);

    return (
      <Comp
        className={classNames(
          addClasseNamePrefix("btn"),
          "inline-flex items-center justify-center ease-linear duration-200",
          "h-fit cursor-pointer border rounded-[3px] outline-none",
          "disabled:pointer-events-none disabled:opacity-50",
          "focus:ring-4 active:ring-4",
          rounded ? "rounded-[50rem]" : "rounded-[.25rem]",
          fullWidth ? "w-full" : "w-fit",
          buttonVariants.style[variantStyle],
          buttonVariants.size[size],
          className
        )}
        disabled={disabled || isLoading}
        ref={ref}
        {...restProps}
      >
        {handledChildren}
      </Comp>
    );
  }
);
