import styled from "styled-components";
import { ClickOutside } from "../ClickOutside";
import * as RadixDropdown from "@radix-ui/react-dropdown-menu";

export const DropdownMenu = styled(RadixDropdown.Content)`
  background-color: red;
`;
export const DropdownItem = styled(RadixDropdown.Item)`
  background-color: blue;
  color: greenyellow;
`;
