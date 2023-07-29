import classNames from "classnames";
import React, { LegacyRef, MouseEvent, forwardRef } from "react";
import { Spinner } from "../../feedback/Spinner";
import * as Styled from "./Button.styles";
import { addClasseNamePrefix } from "../../../../utils/addClasseNamePrefix";
import { GlobalProps } from "../../../../types/GlobalProps";
import { Slot } from "@radix-ui/react-slot";

interface ButtonStyle {
  bg: string;
  border: string;
  text: string;
  focusRing: string;
  activeRing: string;
  hoverBg: string;
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
    `bg-${bg} border-${border} text-${text}`,
    `focus:ring-${focusRing}/40 active:ring-${activeRing}/40`,
    `hover:bg-${hoverBg}`,
    hoverText && `hover:text-${hoverText}`,
    `[&>.hikari-spinner>span]:${spinnerBorderT}`,
  ];

  if (darkStyles) {
    commonClasses.push(...darkStyles);
  }

  return classNames(...commonClasses);
};

const buttonVariants = {
  style: {
    primary: generateButtonStyles({
      bg: "purple-500",
      border: "purple-500",
      text: "white",
      focusRing: "purple-500",
      activeRing: "purple-500",
      hoverBg: "purple-600",
      spinnerBorderT: "border-t-white",
    }),
    secondary: generateButtonStyles({
      bg: "gray-500",
      border: "gray-500",
      text: "white",
      focusRing: "gray-500",
      activeRing: "gray-500",
      hoverBg: "gray-600",
      spinnerBorderT: "border-t-white",
    }),
    danger: generateButtonStyles({
      bg: "red-500",
      border: "red-500",
      text: "white",
      focusRing: "red-500",
      activeRing: "red-500",
      hoverBg: "red-600",
      spinnerBorderT: "border-t-white",
    }),
    success: generateButtonStyles({
      bg: "green-500",
      border: "green-500",
      text: "white",
      focusRing: "green-500",
      activeRing: "green-500",
      hoverBg: "green-600",
      spinnerBorderT: "border-t-white",
    }),
    info: generateButtonStyles({
      bg: "blue-500",
      border: "blue-500",
      text: "white",
      focusRing: "blue-500",
      activeRing: "blue-500",
      hoverBg: "blue-600",
      spinnerBorderT: "border-t-white",
    }),
    warning: generateButtonStyles({
      bg: "yellow-500",
      border: "yellow-500",
      text: "white",
      focusRing: "yellow-500",
      activeRing: "yellow-500",
      hoverBg: "yellow-600",
      spinnerBorderT: "border-t-white",
    }),
    light: generateButtonStyles({
      bg: "slate-200",
      border: "slate-200",
      text: "black",
      focusRing: "slate-200",
      activeRing: "slate-200",
      hoverBg: "slate-300",
      spinnerBorderT: "border-t-black",
      darkStyles: [
        "dark:bg-slate-600 dark:border-slate-600 dark:text-white",
        "dark:ring-slate-600/40 dark:active:ring-slate-600/40",
        "dark:hover:bg-slate-700",
      ],
    }),
    dark: generateButtonStyles({
      bg: "slate-800",
      border: "slate-800",
      text: "white",
      focusRing: "slate-800",
      activeRing: "slate-800",
      hoverBg: "slate-900",
      spinnerBorderT: "border-t-white",
    }),
    "primary-outlined": generateButtonStyles({
      bg: "transparent",
      border: "purple-500",
      text: "purple-500",
      focusRing: "purple-500",
      activeRing: "purple-500",
      hoverBg: "purple-500",
      hoverText: "white",
      spinnerBorderT: "border-t-purple-500",
    }),
    "secondary-outlined": generateButtonStyles({
      bg: "transparent",
      border: "gray-500",
      text: "gray-500",
      focusRing: "gray-500",
      activeRing: "gray-500",
      hoverBg: "gray-500",
      hoverText: "white",
      spinnerBorderT: "border-t-gray-500",
    }),
    "danger-outlined": generateButtonStyles({
      bg: "transparent",
      border: "red-500",
      text: "red-500",
      focusRing: "red-500",
      activeRing: "red-500",
      hoverBg: "red-600",
      hoverText: "white",
      spinnerBorderT: "border-t-white",
    }),
    "success-outlined": generateButtonStyles({
      bg: "transparent",
      border: "green-500",
      text: "green-500",
      focusRing: "green-500",
      activeRing: "green-500",
      hoverBg: "green-600",
      hoverText: "white",
      spinnerBorderT: "border-t-white",
    }),
    "info-outlined": generateButtonStyles({
      bg: "transparent",
      border: "blue-500",
      text: "blue-500",
      focusRing: "blue-500",
      activeRing: "blue-500",
      hoverBg: "blue-600",
      hoverText: "white",
      spinnerBorderT: "border-t-white",
    }),
    "warning-outlined": generateButtonStyles({
      bg: "transparent",
      border: "yellow-500",
      text: "yellow-500",
      focusRing: "yellow-500",
      activeRing: "yellow-500",
      hoverBg: "yellow-600",
      hoverText: "white",
      spinnerBorderT: "border-t-white",
    }),
    "light-outlined": generateButtonStyles({
      bg: "transparent",
      border: "slate-200",
      text: "slate-200",
      focusRing: "slate-200",
      activeRing: "slate-200",
      hoverBg: "slate-300",
      hoverText: "white",
      spinnerBorderT: "border-t-black",
      darkStyles: [
        "dark:border-slate-600 dark:text-slate-600",
        "dark:focus:ring-slate-600/40 dark:active:ring-slate-600/40",
        "dark:hover:bg-slate-600 dark:hover:text-white",
      ],
    }),
    "dark-outlined": generateButtonStyles({
      bg: "transparent",
      border: "slate-800",
      text: "slate-800",
      focusRing: "slate-800",
      activeRing: "slate-800",
      hoverBg: "slate-900",
      hoverText: "white",
      spinnerBorderT: "border-t-white",
    }),
    "primary-ghost": generateButtonStyles({
      bg: "transparent",
      border: "transparent",
      text: "purple-500",
      focusRing: "purple-500",
      activeRing: "purple-500",
      hoverBg: "purple-500/20",
      spinnerBorderT: "border-t-purple-500",
    }),
    "secondary-ghost": generateButtonStyles({
      bg: "transparent",
      border: "transparent",
      text: "gray-500",
      focusRing: "gray-500",
      activeRing: "gray-500",
      hoverBg: "gray-500/20",
      spinnerBorderT: "border-t-gray-500",
    }),
    "danger-ghost": generateButtonStyles({
      bg: "transparent",
      border: "transparent",
      text: "red-500",
      focusRing: "red-500",
      activeRing: "red-500",
      hoverBg: "red-500/20",
      spinnerBorderT: "border-t-white",
    }),
    "success-ghost": generateButtonStyles({
      bg: "transparent",
      border: "transparent",
      text: "green-500",
      focusRing: "green-500",
      activeRing: "green-500",
      hoverBg: "green-500/20",
      spinnerBorderT: "border-t-white",
    }),
    "info-ghost": generateButtonStyles({
      bg: "transparent",
      border: "transparent",
      text: "blue-500",
      focusRing: "blue-500",
      activeRing: "blue-500",
      hoverBg: "blue-500/20",
      spinnerBorderT: "border-t-white",
    }),
    "warning-ghost": generateButtonStyles({
      bg: "transparent",
      border: "transparent",
      text: "yellow-500",
      focusRing: "yellow-500",
      activeRing: "yellow-500",
      hoverBg: "yellow-500/20",
      spinnerBorderT: "border-t-white",
    }),
    "light-ghost": generateButtonStyles({
      bg: "transparent",
      border: "transparent",
      text: "slate-200",
      focusRing: "slate-200",
      activeRing: "slate-200",
      hoverBg: "slate-200/20",
      spinnerBorderT: "border-t-black",
      darkStyles: [
        "dark:border-slate-600 dark:text-slate-600",
        "dark:focus:ring-slate-600/40 dark:active:ring-slate-600/40",
        "dark:hover:bg-slate-600 dark:hover:text-white",
      ],
    }),
    "dark-ghost": generateButtonStyles({
      bg: "transparent",
      border: "transparent",
      text: "slate-800",
      focusRing: "slate-800",
      activeRing: "slate-800",
      hoverBg: "slate-900/20",
      spinnerBorderT: "border-t-white",
    }),

    // Define other variants in a similar manner
  },
};

// const buttonVariants = {
//   style: {
//     primary: classNames(
//       "bg-purple-500 border-purple-500 text-white",
//       "focus:ring-purple-500/40 active:ring-purple-500/40",
//       "hover:bg-purple-600",
//       "[&>.hikari-spinner>span]:border-t-white"
//     ),
//     secondary: classNames(
//       "bg-gray-500 border-gray-500 text-white",
//       "focus:ring-gray-500/40 active:ring-gray-500/40",
//       "hover:bg-gray-600",
//       "[&>.hikari-spinner>span]:border-t-white"
//     ),
//     danger: classNames(
//       "bg-red-500 border-red-500 text-white",
//       "focus:ring-red-500/40 active:ring-red-500/40",
//       "hover:bg-red-600",
//       "[&>.hikari-spinner>span]:border-t-white"
//     ),
//     success: classNames(
//       "bg-green-500 border-green-500 text-white",
//       "focus:ring-green-500/40 active:ring-green-500/40",
//       "hover:bg-green-600",
//       "[&>.hikari-spinner>span]:border-t-white"
//     ),
//     info: classNames(
//       "bg-blue-500 border-blue-500 text-white",
//       "focus:ring-blue-500/40 active:ring-blue-500/40",
//       "hover:bg-blue-600",
//       "[&>.hikari-spinner>span]:border-t-white"
//     ),
//     warning: classNames(
//       "bg-yellow-500 border-yellow-500 text-white",
//       "focus:ring-yellow-500/40 active:ring-yellow-500/40",
//       "hover:bg-yellow-600",
//       "[&>.hikari-spinner>span]:border-t-white"
//     ),
//     light: classNames(
//       "bg-slate-200 border-slate-200 text-black",
//       "focus:ring-slate-200/40 active:ring-slate-200/40",
//       "hover:bg-slate-300",
//       "[&>.hikari-spinner>span]:border-t-black",
//       "dark:bg-slate-600 dark:border-slate-600 dark:text-white",
//       "dark:ring-slate-600/40 dark:active:ring-slate-600/40",
//       "dark:hover:bg-slate-700"
//     ),
//     dark: classNames(
//       "bg-slate-800 border-slate-800 text-white",
//       "focus:ring-slate-800/40 active:ring-slate-800/40",
//       "hover:bg-slate-900",
//       "[&>.hikari-spinner>span]:border-t-white"
//       // "dark:bg-slate-200 dark:border-slate-200 dark:text-black",
//       // "dark:focus:ring-slate-200/40 dark:active:ring-slate-200/40",
//       // "dark:hover:bg-slate-300"
//     ),
//     "primary-outlined": classNames(
//       "bg-transparent border-purple-500 text-purple-500",
//       "focus:ring-purple-500/40 active:ring-purple-500/40",
//       "hover:bg-purple-500 hover:text-white",
//       "[&>.hikari-spinner>span]:border-t-purple-500"
//     ),
//     "secondary-outlined": classNames(
//       "bg-transparent border-gray-500 text-gray-500",
//       "focus:ring-gray-500/40 active:ring-gray-500/40",
//       "hover:bg-gray-500 hover:text-white",
//       "[&>.hikari-spinner>span]:border-t-gray-500"
//     ),
//     "danger-outlined": classNames(
//       "bg-transparent border-red-500 text-red-500",
//       "focus:ring-red-500/40 active:ring-red-500/40",
//       "hover:bg-red-500 hover:text-white",
//       "[&>.hikari-spinner>span]:border-t-red-500"
//     ),
//     "success-outlined": classNames(
//       "bg-transparent border-green-500 text-green-500",
//       "focus:ring-green-500/40 active:ring-green-500/40",
//       "hover:bg-green-500 hover:text-white",
//       "[&>.hikari-spinner>span]:border-t-green-500"
//     ),
//     "info-outlined": classNames(
//       "bg-transparent border-blue-500 text-blue-500",
//       "focus:ring-blue-500/40 active:ring-blue-500/40",
//       "hover:bg-blue-500 hover:text-white",
//       "[&>.hikari-spinner>span]:border-t-blue-500"
//     ),
//     "warning-outlined": classNames(
//       "bg-transparent border-yellow-500 text-yellow-500",
//       "focus:ring-yellow-500/40 active:ring-yellow-500/40",
//       "hover:bg-yellow-500 hover:text-white",
//       "[&>.hikari-spinner>span]:border-t-yellow-500"
//     ),
//     "light-outlined": classNames(
//       "bg-transparent border-slate-200 text-slate-200",
//       "focus:ring-slate-200/40 active:ring-slate-200/40",
//       "hover:bg-slate-200 hover:text-black",
//       "[&>.hikari-spinner>span]:border-t-slate-200",
//       "dark:border-slate-600 dark:text-slate-600",
//       "dark:focus:ring-slate-600/40 dark:active:ring-slate-600/40",
//       "dark:hover:bg-slate-600 dark:hover:text-white"
//     ),
//     "dark-outlined": classNames(
//       "bg-transparent border-slate-800 text-slate-800",
//       "focus:ring-slate-800/40 active:ring-slate-800/40",
//       "hover:bg-slate-900 hover:text-white",
//       "[&>.hikari-spinner>span]:border-t-slate-800"
//     ),
//     "primary-ghost": classNames(
//       "bg-transparent border-transparent text-purple-500",
//       "focus:ring-purple-500/40 active:ring-purple-500/40",
//       "hover:bg-purple-500 hover:text-white",
//       "[&>.hikari-spinner>span]:border-t-purple-500"
//     ),
//     "secondary-ghost": classNames(
//       "bg-transparent border-transparent text-gray-500",
//       "focus:ring-gray-500/40 active:ring-gray-500/40",
//       "hover:bg-gray-500 hover:text-white",
//       "[&>.hikari-spinner>span]:border-t-gray-500"
//     ),
//     "danger-ghost": classNames(
//       "bg-transparent border-transparent text-red-500",
//       "focus:ring-red-500/40 active:ring-red-500/40",
//       "hover:bg-red-500 hover:text-white",
//       "[&>.hikari-spinner>span]:border-t-red-500"
//     ),
//     "success-ghost": classNames(
//       "bg-transparent border-transparent text-green-500",
//       "focus:ring-green-500/40 active:ring-green-500/40",
//       "hover:bg-green-500 hover:text-white",
//       "[&>.hikari-spinner>span]:border-t-green-500"
//     ),
//     "info-ghost": classNames(
//       "bg-transparent border-transparent text-blue-500",
//       "focus:ring-blue-500/40 active:ring-blue-500/40",
//       "hover:bg-blue-500 hover:text-white",
//       "[&>.hikari-spinner>span]:border-t-blue-500"
//     ),
//     "warning-ghost": classNames(
//       "bg-transparent border-transparent text-yellow-500",
//       "focus:ring-yellow-500/40 active:ring-yellow-500/40",
//       "hover:bg-yellow-500 hover:text-white",
//       "[&>.hikari-spinner>span]:border-t-yellow-500"
//     ),
//     "light-ghost": classNames(
//       "bg-transparent border-transparent text-slate-200",
//       "focus:ring-slate-200/40 active:ring-slate-200/40",
//       "hover:bg-slate-200 hover:text-black",
//       "[&>.hikari-spinner>span]:border-t-slate-200",
//       "dark:border-transparent dark:text-slate-600",
//       "dark:focus:ring-slate-600/40 dark:active:ring-slate-600/40",
//       "dark:hover:bg-slate-600 dark:hover:text-white"
//     ),
//     "dark-ghost": classNames(
//       "bg-transparent border-transparent text-slate-800",
//       "focus:ring-slate-800/40 active:ring-slate-800/40",
//       "hover:bg-slate-900 hover:text-white",
//       "[&>.hikari-spinner>span]:border-t-slate-800"
//     ),
//   },
// };

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
          // "hover:bg-purple-500/20",
          // "hover:bg-gray-500/20",
          // "hover:bg-blue-500/20",
          // "hover:bg-red-500/20",
          // "hover:bg-green-500/20",
          // "hover:bg-yellow-500/20",
          // "hover:bg-slate-200/20",
          // "hover:bg-slate-900/20",

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
