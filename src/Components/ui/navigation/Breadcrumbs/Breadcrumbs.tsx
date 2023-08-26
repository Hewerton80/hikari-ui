import React from "react";
import * as Styled from "./Breadcrumbs.styles";
import { addClasseNamePrefix } from "../../../../utils/addClasseNamePrefix";
import { twMerge } from "tailwind-merge";
import { Slot } from "@radix-ui/react-slot";
import { GlobalProps } from "../../../../types/GlobalProps";

export interface BreadcrumbsProps extends GlobalProps {}

export interface BreadcrumbsLinkProps extends GlobalProps {
  href: string;
  target?: "_blank" | "_parent" | "_self" | "_top";
  asChild?: boolean;
}

function Breadcrumbs({
  className,
  children,
  css,
  ...restProps
}: BreadcrumbsProps) {
  return (
    <ul
      className={twMerge(
        addClasseNamePrefix("breadcrumbs"),
        Styled.Breadcrumbs({ css }),
        className
      )}
      {...restProps}
    >
      {children}
    </ul>
  );
}

export function BreadcrumbLink({
  className,
  children,
  css,
  href,
  asChild,
  ...restProps
}: BreadcrumbsLinkProps) {
  const Comp = asChild ? Slot : "a";

  return (
    <li
      className={twMerge(
        addClasseNamePrefix("breadcrumbs-item"),
        Styled.Link({ css }),
        className
      )}
    >
      <Comp href={href} {...restProps}>
        {children}
      </Comp>
    </li>
  );
}
Breadcrumbs.Link = BreadcrumbLink;
export { Breadcrumbs };
