import React from "react";
import { Button, ButtonProps } from "../../forms/Button";
import { addClasseNamePrefix } from "../../../utils/addClasseNamePrefix";
import { ClickOutside } from "../ClickOutside";
import * as Styled from "./Dropdown.styles";
import * as RadixDropdown from "@radix-ui/react-dropdown-menu";
import classNames from "classnames";

interface IDropDownContext {
  show?: boolean;
  handleSetShowDropdown: (value: boolean) => void;
}

interface DropdownProps {
  children: React.ReactNode;
}

export const DropDownContext = React.createContext({} as IDropDownContext);

function Dropdown({ children }: DropdownProps) {
  // const [show, setShow] = React.useState(false);

  // const handleSetShowDropdown = React.useCallback((value: boolean) => {
  //   setShow(value);
  // }, []);

  return <RadixDropdown.Root>{children}</RadixDropdown.Root>;
}

interface DropdowToogle extends RadixDropdown.DropdownMenuTriggerProps {}
interface DropdowMenu extends RadixDropdown.DropdownMenuContentProps {}
interface DropdowItem extends RadixDropdown.DropdownMenuItemProps {}

function Toogle({ className, children, ...restProps }: DropdowToogle) {
  return (
    // <Component
    //   className={addClasseNamePrefix("dropdown-toogle")}
    //   role="button"
    //   onClick={() => handleSetShowDropdown(false)}
    //   {...restProps}
    // />
    <RadixDropdown.Trigger
      className={classNames(addClasseNamePrefix("dropdown-toogle"), className)}
      {...restProps}
      asChild
    >
      <span>{children}</span>
    </RadixDropdown.Trigger>
  );
}

function Menu({ children, className, ...restProps }: DropdowMenu) {
  return (
    <RadixDropdown.Portal>
      <Styled.DropdownMenu
        className={classNames(addClasseNamePrefix("dropdown-menu"), className)}
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
