import { twMerge } from "tailwind-merge";
import React from "react";
import { addClasseNamePrefix } from "../../../../utils/addClasseNamePrefix";
import * as RadixTooltip from "@radix-ui/react-tooltip";
import { isString } from "../../../../utils/isType";
import { Badge, BadgeProps } from "../../dataDisplay/Badge";
import { orientationStyle } from "../../../commonStyles/variantOrientationStyle";

const variantsSize = {
  auto: "max-w-fit",
  sm: "max-w-3xl",
  md: "max-w-7xl",
  lg: "max-w-[512px]",
};
export interface TooltipProps extends BadgeProps {
  content?: string | JSX.Element;
  defaultOpen?: boolean;
  delayDuration?: number;
  orientation?: keyof typeof orientationStyle;
  size?: keyof typeof variantsSize;
}

export function Tooltip({
  children,
  content,
  className,
  variantStyle = "dark",
  orientation = "top-center",
  defaultOpen,
  size = "md",
  delayDuration = 0,
  css,
  ...restProps
}: TooltipProps) {
  return (
    <RadixTooltip.Provider delayDuration={delayDuration}>
      <RadixTooltip.Root defaultOpen={defaultOpen}>
        <RadixTooltip.Trigger asChild={!isString(children)}>
          {children}
        </RadixTooltip.Trigger>
        <RadixTooltip.Portal>
          <RadixTooltip.Content
            sideOffset={6}
            {...orientationStyle[orientation]}
          >
            {isString(content) ? (
              <Badge
                variantStyle={variantStyle}
                className={twMerge(
                  addClasseNamePrefix("tolltip"),
                  "animate-fade animate-duration-300",
                  variantsSize[size],
                  className
                )}
                {...restProps}
              >
                {content}
              </Badge>
            ) : (
              content
            )}
          </RadixTooltip.Content>
        </RadixTooltip.Portal>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  );
}
