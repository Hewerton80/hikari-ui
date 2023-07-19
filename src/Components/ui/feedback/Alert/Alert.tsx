import classNames from "classnames";
import React, { forwardRef, HTMLAttributes } from "react";
import { addClasseNamePrefix } from "../../../../utils/addClasseNamePrefix";
import { GlobalProps } from "../../../../types/GlobalProps";
import { CheckCircledIcon } from "@radix-ui/react-icons";

// [&:has(svg)]:pl-11 [&>svg+div]:translate-y-[-3px]
// [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground

const alertVariants = {
  variantStyle: {
    primary: { classes: "bg-primary/20 border-primary/10 text-primary" },
    secondary: {
      classes: "bg-secondary/20 border-secondary/10 text-secondary",
    },
    danger: { classes: "bg-danger/20 border-danger/10 text-danger" },
    success: { classes: "bg-success/20 border-success/10 text-success" },
    info: { classes: "bg-info/20 border-info/10 text-info" },
    warning: { classes: "bg-warning/20 border-warning/10 text-warning" },
  },
};

type VariantIconsProps = {
  [Property in keyof typeof alertVariants]: keyof typeof alertVariants.variantStyle;
};
export interface AlertProps extends GlobalProps {
  variantStyle?: keyof typeof alertVariants.variantStyle;
}

const AlertRoot = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement> & VariantIconsProps
>(
  (
    { children, className, variantStyle = "info", ...restProps }: AlertProps,
    ref
  ) => {
    return (
      <div
        ref={ref}
        role="alert"
        className={classNames(
          addClasseNamePrefix("alert"),
          "flex justify-center flex-col",
          "relative px-5 py-3 text-sm rounded",
          "[&:has(svg)]:pl-10 [&>svg]:absolute [&>svg]:left-5 [&>svg]:-translate-x-1/2",
          " [&>svg]:top-3 [&>svg]:h-5 [&>svg]:w-5",
          alertVariants.variantStyle[variantStyle],
          className
        )}
        {...restProps}
      >
        <CheckCircledIcon />
        {children}
      </div>
    );
  }
);

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={classNames(
      "mb-1 font-medium leading-none tracking-tight",
      className
    )}
    {...props}
  />
));
AlertTitle.displayName = "AlertTitle";

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={classNames("text-sm [&_p]:leading-relaxed", className)}
    {...props}
  />
));

AlertDescription.displayName = "AlertDescription";

const Alert = {
  Root: AlertRoot,
  Title: AlertTitle,
  Description: AlertDescription,
};
export { Alert };
