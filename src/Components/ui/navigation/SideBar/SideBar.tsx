import React, { ElementType, MouseEvent, useCallback, useMemo } from "react";
import * as Styled from "./SideBar.styles";
import { addClasseNamePrefix } from "../../../../utils/addClasseNamePrefix";
import classNames from "classnames";
import { GlobalProps } from "../../../../types/GlobalProps";
import { Box, BoxProps } from "../../layout/Box";
import { Text } from "../../typography/Text";

export interface SideBarProps extends BoxProps {}

export interface SideBarItem extends Omit<GlobalProps, "children"> {
  icon?: JSX.Element;
  text: string;
  href?: string;
  as?: ElementType;
  subItems?: SideBarItem[];
}

interface SideBarMenuProps extends Omit<GlobalProps, "children"> {
  items: SideBarItem[];
}

function SideBar({ className, children, css, ...restProps }: SideBarProps) {
  return (
    <Box
      data-state="expanded"
      className={classNames(
        addClasseNamePrefix("side-bar"),
        Styled.SideBar({ css }),
        className
      )}
      as="aside"
      {...restProps}
    >
      {children}
    </Box>
  );
}

function Item({
  className,
  icon,
  text,
  href,
  subItems,
  as: Comp = "a",
  ...restProps
}: SideBarItem) {
  const hasSubmenu = useMemo(
    () => Array.isArray(subItems) && subItems?.length > 0,
    [subItems]
  );

  console.log(text, hasSubmenu, subItems);

  const handleClickInNavItem = useCallback(
    (e: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>) => {
      e.preventDefault();
      // if (!menuIsExpanded) {
      //   return
      // }
      // if (hasSubmenu) {
      //   setShowSubmenu((currentShowSubmenu) => !currentShowSubmenu)
      //   e.preventDefault()
      //   return
      // }
      // if (isMobile() && showSideBar) {
      //   handleToogleSideBar()
      // }
    },
    []
  );

  return (
    <li
      className={classNames(
        addClasseNamePrefix("side-bar-item"),
        Styled.SideBarItem(),
        className
      )}
      {...restProps}
    >
      <Comp
        className={classNames(
          addClasseNamePrefix("side-bar-link"),
          Styled.SideBarLink()
        )}
        href={href}
        onClick={handleClickInNavItem}
      >
        <Box css={{ display: "flex" }}>{icon}</Box>
        <Text as="p" css={{ marginLeft: "$3" }}>
          {text}
        </Text>
      </Comp>
      {hasSubmenu && (
        <Box css={{ display: "flex", flexDirection: "column", width: "100%" }}>
          {subItems.map(({ subItems, ...restTextProps }, i) => {
            return (
              <Item
                key={`${restTextProps?.text}-${i}-sub-item`}
                {...restTextProps}
              />
            );
          })}
        </Box>
      )}
    </li>
  );
}

function SideBarMenu({
  className,
  items,
  css,
  ...restProps
}: SideBarMenuProps) {
  return (
    <ul
      role="navigation"
      className={classNames(
        addClasseNamePrefix("side-bar-menu"),
        Styled.SideBarMenu({ css }),
        className
      )}
      {...restProps}
    >
      {items.map(({ subItems, ...restTextProps }, i) => {
        return (
          <Item key={`${restTextProps?.text}-${i}-item`} {...restTextProps} />
        );
      })}
    </ul>
  );
}

SideBar.Menu = SideBarMenu;
SideBar.Item = Item;
export { SideBar };
