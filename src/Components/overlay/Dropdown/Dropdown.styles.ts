import styled, { css } from "styled-components";
import * as RadixDropdown from "@radix-ui/react-dropdown-menu";
import { rem } from "polished";
import { colors } from "../../../styles/colors";
import { shadow } from "../../helpers/shadow";

type MenuOrientationType =
  | "left"
  | "right"
  | "top-start"
  | "top-center"
  | "top-right"
  | "bottom-start"
  | "bottom-center"
  | "bottom-right";

type AvaliableOrientationsMenu = {
  [Property in MenuOrientationType]: {
    align: "start" | "center" | "end";
    side: "top" | "right" | "bottom" | "left";
  };
};

export const menuOrientation: AvaliableOrientationsMenu = {
  "top-start": { align: "start", side: "top" },
  "top-center": { align: "center", side: "top" },
  "top-right": { align: "end", side: "top" },
  left: { align: "start", side: "left" },
  right: { align: "start", side: "right" },
  "bottom-start": { align: "start", side: "bottom" },
  "bottom-center": { align: "center", side: "bottom" },
  "bottom-right": { align: "end", side: "bottom" },
};

export interface DropdownMenuProps {
  orientation?: MenuOrientationType;
}

export const DropdownMenu = styled(RadixDropdown.Content)<DropdownMenuProps>`
  min-width: ${rem(160)};
  display: flex;
  flex-direction: column;
  padding: ${rem(8)} 0;
  ${shadow("sm")}
  ${({ theme }) => css`
    background-color: ${theme.isDarkMode ? colors["dark-card"] : colors.white};
    border: ${rem(1)} solid
      ${theme.isDarkMode ? colors["dark-card"] : colors["gray-border"]};
  `}
`;

export const DropdownItem = styled(RadixDropdown.Item)`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: ${rem(4)} ${rem(24)};
  font-size: ${rem(14)};
  white-space: nowrap;
  outline: none;
  cursor: pointer;
  ${({ theme }) => css`
    color: ${theme.isDarkMode ? colors.light : colors.black};
    &:hover,
    &:focus {
      background-color: ${theme.isDarkMode
        ? colors["dark-hover"]
        : colors["gray-light"]};
    }
  `}
`;
