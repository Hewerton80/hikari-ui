import React from "react";
import { addClasseNamePrefix } from "../../../utils/addClasseNamePrefix";
import * as Styled from "./Dropdown.styles";
import * as RadixDropdown from "@radix-ui/react-dropdown-menu";
import classNames from "classnames";

export interface DropdownProps {
  children: React.ReactNode;
}
export interface DropdowToogle extends GlobalProps {}
export interface DropdowMenu extends GlobalProps, Styled.DropdownMenuProps {}
export interface DropdowItem extends RadixDropdown.DropdownMenuItemProps {}

function Dropdown({ children }: DropdownProps) {
  return <RadixDropdown.Root>{children}</RadixDropdown.Root>;
}

function Toogle({ className, children, ...restProps }: DropdowToogle) {
  return (
    <RadixDropdown.Trigger
      className={classNames(addClasseNamePrefix("dropdown-toogle"), className)}
      asChild
      {...restProps}
    >
      <span>{children}</span>
    </RadixDropdown.Trigger>
  );
}

function Menu({
  children,
  orientation = "bottom-right",
  className,
  ...restProps
}: DropdowMenu) {
  return (
    <RadixDropdown.Portal>
      <Styled.DropdownMenu
        className={classNames(addClasseNamePrefix("dropdown-menu"), className)}
        sideOffset={4}
        role="menu"
        {...Styled.menuOrientation[orientation]}
        {...restProps}
      >
        {children}
      </Styled.DropdownMenu>
    </RadixDropdown.Portal>
  );
}

function Item({ children, className, ...restProps }: DropdowItem) {
  return (
    <Styled.DropdownItem
      className={classNames(addClasseNamePrefix("dropdown-item"), className)}
      role="menuitem"
      asChild
      {...restProps}
    >
      {children}
    </Styled.DropdownItem>
  );
}

Dropdown.Toogle = Toogle;
Dropdown.Menu = Menu;
Dropdown.Item = Item;

export { Dropdown };
