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

// [&:has(svg)]:pl-11 [&>svg+div]:translate-y-[-3px]
// [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground

const alertVariants = {
  variantStyle: {
    danger: {
      classes: "bg-danger/20 border-danger/10 text-danger border-l-danger",
      icon: <CrossCircledIcon />,
    },
    success: {
      classes: "bg-success/20 border-success/10 text-success border-l-success",
      icon: <CheckCircledIcon />,
    },
    info: {
      classes: "bg-info/20 border-info/10 text-info border-l-info",
      icon: <InfoCircledIcon />,
    },
    warning: {
      classes: "bg-warning/20 border-warning/10 text-warning border-l-warning",
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
