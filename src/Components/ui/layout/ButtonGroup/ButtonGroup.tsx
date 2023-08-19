import React, { LegacyRef, forwardRef } from "react";
import classNames from "classnames";
import { addClasseNamePrefix } from "../../../../utils/addClasseNamePrefix";
import { GlobalProps } from "../../../../types/GlobalProps";

export interface ButtonGroupProps extends GlobalProps {
  vertical?: boolean;
}

export const ButtonGroup = forwardRef(
  (
    { children, className, vertical, ...restProps }: ButtonGroupProps,
    ref: LegacyRef<HTMLDivElement>
  ) => {
    return (
      <div
        ref={ref}
        className={classNames(
          addClasseNamePrefix("btn-group"),
          "flex [&>button:not(:first-child):not(:last-child)]:rounded-none",
          vertical
            ? classNames(
                "flex-col [&>button]:w-full",
                "[&>button:first-child]:rounded-b-none [&>button:last-child]:rounded-t-none",
                "[&>button+button]:border-t-0"
              )
            : classNames(
                "[&>button:first-child]:rounded-r-none [&>button:last-child]:rounded-l-none",
                "[&>button+button]:border-l-0"
              ),
          className
        )}
        {...restProps}
      >
        {children}
      </div>
    );
  }
);
