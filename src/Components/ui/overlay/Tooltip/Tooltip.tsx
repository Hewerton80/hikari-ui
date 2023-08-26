import { twMerge } from "tailwind-merge";
import React from "react";
import { addClasseNamePrefix } from "../../../../utils/addClasseNamePrefix";
import * as RadixTooltip from "@radix-ui/react-tooltip";
import * as Styled from "./Tooltip.styles";
import { isString } from "../../../../utils/isType";
import { orientationStyle } from "../../../commonStyles/variantOrientationStyle";
import { Slot } from "@radix-ui/react-slot";
import { GlobalProps } from "../../../../types/GlobalProps";

export interface TooltipProps extends GlobalProps, Styled.TooltipProps {
  content?: string | JSX.Element;
  defaultOpen?: boolean;
}

export function Tooltip({
  children,
  content,
  className,
  variantStyle = "dark",
  orientation = "top-center",
  defaultOpen,
  size = "md",
  css,
  ...restProps
}: TooltipProps) {
  return (
    <RadixTooltip.Provider delayDuration={0}>
      <RadixTooltip.Root defaultOpen={defaultOpen}>
        <RadixTooltip.Trigger asChild>
          <span>{children}</span>
        </RadixTooltip.Trigger>
        <RadixTooltip.Portal>
          <RadixTooltip.Content
            sideOffset={6}
            {...orientationStyle[orientation]}
          >
            <Slot className={Styled.TooltipeAnimation()}>
              {isString(content) ? (
                <span
                  className={twMerge(
                    addClasseNamePrefix("tolltip"),
                    Styled.Tooltip({ css, variantStyle, size }),
                    className
                  )}
                  {...restProps}
                >
                  {content}
                </span>
              ) : (
                content
              )}
            </Slot>
          </RadixTooltip.Content>
        </RadixTooltip.Portal>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  );
}
