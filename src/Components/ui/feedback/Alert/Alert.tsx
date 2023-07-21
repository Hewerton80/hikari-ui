import classNames from "classnames";
import React, { forwardRef, LegacyRef } from "react";
import { addClasseNamePrefix } from "../../../../utils/addClasseNamePrefix";
import { GlobalProps } from "../../../../types/GlobalProps";
import {
  CheckCircledIcon,
  ExclamationTriangleIcon,
  InfoCircledIcon,
  CrossCircledIcon,
} from "@radix-ui/react-icons";

const alertVariants = {
  variantStyle: {
    danger: {
      classes: "bg-red-500/20 border-red-500/10 text-red-500 border-l-red-500",
      icon: <CrossCircledIcon />,
    },
    success: {
      classes:
        "bg-green-500/20 border-green-500/10 text-green-500 border-l-green-500",
      icon: <CheckCircledIcon />,
    },
    info: {
      classes:
        "bg-blue-500/20 border-blue-500/10 text-blue-500 border-l-blue-500",
      icon: <InfoCircledIcon />,
    },
    warning: {
      classes:
        "bg-yellow-500/20 border-yellow-500/10 text-yellow-500 border-l-yellow-500",
      icon: <ExclamationTriangleIcon />,
    },
  },
};

export type VariantIconsProps = {
  [Property in keyof typeof alertVariants]: keyof typeof alertVariants.variantStyle;
};
export interface AlertProps extends GlobalProps {
  variantStyle?: keyof typeof alertVariants.variantStyle;
  hideIcon?: boolean;
}

export const AlertRoot = forwardRef(
  (
    {
      children,
      className,
      variantStyle = "info",
      hideIcon,
      ...restProps
    }: AlertProps,
    ref?: LegacyRef<HTMLDivElement>
  ) => {
    return (
      <div
        ref={ref}
        role="alert"
        className={classNames(
          addClasseNamePrefix("alert"),
          "flex justify-center flex-col",
          "relative px-5 py-3 text-sm rounded border-l-4",
          "[&:has(svg)]:pl-10 [&>svg]:absolute [&>svg]:left-5 [&>svg]:-translate-x-1/2",
          " [&>svg]:top-3 [&>svg]:h-5 [&>svg]:w-5",
          alertVariants.variantStyle[variantStyle].classes,
          className
        )}
        {...restProps}
      >
        {!hideIcon && alertVariants.variantStyle[variantStyle].icon}
        {children}
      </div>
    );
  }
);

const AlertTitle = React.forwardRef(
  (
    { className, ...restProps }: GlobalProps,
    ref: LegacyRef<HTMLHeadingElement>
  ) => (
    <h5
      ref={ref}
      className={classNames(
        "mb-1 font-medium leading-none tracking-tight",
        className
      )}
      {...restProps}
    />
  )
);
AlertTitle.displayName = "AlertTitle";

const AlertDescription = React.forwardRef(
  (
    { className, ...restProps }: GlobalProps,
    ref: LegacyRef<HTMLDivElement>
  ) => (
    <div
      ref={ref}
      className={classNames("text-sm [&_p]:leading-relaxed", className)}
      {...restProps}
    />
  )
);

AlertDescription.displayName = "AlertDescription";

const Alert = {
  Root: AlertRoot,
  Title: AlertTitle,
  Description: AlertDescription,
};

export { Alert };
