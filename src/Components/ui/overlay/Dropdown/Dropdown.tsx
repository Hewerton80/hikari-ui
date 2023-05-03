import React, { ReactNode } from "react";
import { addClasseNamePrefix } from "../../../../utils/addClasseNamePrefix";
import * as Styled from "./Dropdown.styles";
import * as RadixDropdown from "@radix-ui/react-dropdown-menu";
import classNames from "classnames";
import { orientationStyle } from "../../../commonStyles/variantOrientationStyle";
import { GlobalProps } from "../../../../types/GlobalProps";

export interface DropdownProps {
  children: ReactNode;
}
export interface DropdowToogleProps extends GlobalProps {
  asChild?: boolean;
}
export interface DropdowMenuProps extends GlobalProps, Styled.MenuProps {}
export interface DropdowItemProps extends RadixDropdown.DropdownMenuItemProps {
  asChild?: boolean;
}

function Dropdown({ children }: DropdownProps) {
  return <RadixDropdown.Root>{children}</RadixDropdown.Root>;
}

function Toogle({
  className,
  children,
  css,
  ...restProps
}: DropdowToogleProps) {
  return (
    <RadixDropdown.Trigger
      className={classNames(
        addClasseNamePrefix("dropdown-toogle"),
        Styled.Toogle(),
        className
      )}
      {...restProps}
    >
      {children}
    </RadixDropdown.Trigger>
  );
}

function Menu({
  children,
  orientation = "bottom-right",
  className,
  css,
  ...restProps
}: DropdowMenuProps) {
  return (
    <RadixDropdown.Portal>
      <RadixDropdown.Content
        className={classNames(
          addClasseNamePrefix("dropdown-menu"),
          Styled.Menu(),
          className
        )}
        sideOffset={4}
        role="menu"
        {...orientationStyle[orientation]}
        {...restProps}
      >
        {children}
      </RadixDropdown.Content>
    </RadixDropdown.Portal>
  );
}

function Item({ children, className, ...restProps }: DropdowItemProps) {
  return (
    <RadixDropdown.Item
      className={classNames(
        addClasseNamePrefix("dropdown-item"),
        Styled.Item(),
        className
      )}
      role="menuitem"
      {...restProps}
    >
      {children}
    </RadixDropdown.Item>
  );
}

Dropdown.Toogle = Toogle;
Dropdown.Menu = Menu;
Dropdown.Item = Item;

export { Dropdown };
