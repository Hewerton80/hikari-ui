import React from "react";
import * as Styled from "./Dropdown.styles";
import * as RadixDropdown from "@radix-ui/react-dropdown-menu";
export interface DropdownProps {
    children: React.ReactNode;
}
export interface DropdowToogleProps extends GlobalProps {
}
export interface DropdowMenuProps extends GlobalProps, Styled.MenuProps {
}
export interface DropdowItemProps extends RadixDropdown.DropdownMenuItemProps {
}
declare function Dropdown({ children }: DropdownProps): JSX.Element;
declare namespace Dropdown {
    var Toogle: ({ className, children, css, ...restProps }: DropdowToogleProps) => JSX.Element;
    var Menu: ({ children, orientation, className, css, ...restProps }: DropdowMenuProps) => JSX.Element;
    var Item: ({ children, className, ...restProps }: DropdowItemProps) => JSX.Element;
}
export { Dropdown };
