import { twMerge } from "tailwind-merge";
import React, { LegacyRef, forwardRef } from "react";
import { addClasseNamePrefix } from "../../../../utils/addClasseNamePrefix";

import { GlobalProps } from "../../../../types/GlobalProps";

export const variants = {
  primary: "text-white bg-purple-500",
  success: "text-white bg-green-500",
  secondary: "text-white bg-gray-500",
  info: "text-white bg-blue-500",
  danger: "text-white bg-red-500",
  dark: "text-white bg-slate-800",
  warning: "text-black bg-yellow-500",
};

export interface BadgeProps extends GlobalProps {
  variantStyle?: keyof typeof variants;
}
export const Badge = forwardRef(
  (
    {
      variantStyle = "primary",
      children,
      className,
      css,
      ...restProps
    }: BadgeProps,
    ref?: LegacyRef<HTMLSpanElement>
  ) => {
    return (
      <span
        ref={ref}
        className={twMerge(
          addClasseNamePrefix("badge"),
          // StyledBadge({ variantStyle, css }),
          "flex items-center justify-center w-fit text-xs py-1.5 px-2 rounded",
          variants[variantStyle],
          className
        )}
        {...restProps}
      >
        {children}
      </span>
    );
  }
);
