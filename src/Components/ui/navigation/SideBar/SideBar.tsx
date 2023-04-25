import React, {
  ElementType,
  MouseEvent,
  useCallback,
  useId,
  useMemo,
  useState,
} from "react";
import * as Styled from "./SideBar.styles";
import { addClasseNamePrefix } from "../../../../utils/addClasseNamePrefix";
import classNames from "classnames";
import { GlobalProps } from "../../../../types/GlobalProps";
import { Box, BoxProps } from "../../layout/Box";
import { Text } from "../../typography/Text";
import { BsDot } from "react-icons/bs";
import * as RadixAccordion from "@radix-ui/react-accordion";
import { FaMinus, FaPlus } from "react-icons/fa";

export interface SideBarProps extends BoxProps {
  collapsed?: boolean;
}

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

function SideBar({
  className,
  collapsed,
  children,
  css,
  ...restProps
}: SideBarProps) {
  const [isMouseOveringSidebar, setIsMouseOveringSidebar] = useState(false);

  const menuIsExpanded = useMemo(
    () => !collapsed || isMouseOveringSidebar,
    [collapsed, isMouseOveringSidebar]
  );

  return (
    <aside
      data-state={
        menuIsExpanded
          ? Styled.SideBarState.EXPANDED
          : Styled.SideBarState.COLLAPSED
      }
      className={classNames(
        addClasseNamePrefix("side-bar"),
        Styled.SideBar({ css }),
        className
      )}
      onMouseOver={() => setIsMouseOveringSidebar(true)}
      onMouseLeave={() => setIsMouseOveringSidebar(false)}
      {...restProps}
    >
      {children}
    </aside>
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
  const [showSubmenu, setShowSubmenu] = useState(false);
  const id = useId();
  const hasSubmenu = useMemo(
    () => Array.isArray(subItems) && subItems?.length > 0,
    [subItems]
  );

  console.log({ text, hasSubmenu, subItems });

  const handleClickInNavItem = useCallback(
    (e: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>) => {
      // if (!menuIsExpanded) {
      //   return
      // }
      if (hasSubmenu) {
        setShowSubmenu((currentShowSubmenu) => !currentShowSubmenu);
        // e.preventDefault();
        // return;
      }
      // if (isMobile() && showSideBar) {
      //   handleToogleSideBar()
      // }
      return e;
    },
    [hasSubmenu]
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
      <RadixAccordion.Root type="single" asChild collapsible={showSubmenu}>
        <RadixAccordion.Item value={id}>
          <RadixAccordion.Trigger asChild>
            <div>
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
                {hasSubmenu && (
                  <span className={Styled.MenuArrowWrapper()}>
                    {showSubmenu ? <FaMinus size={16} /> : <FaPlus size={16} />}
                  </span>
                )}
              </Comp>
            </div>
          </RadixAccordion.Trigger>
          {hasSubmenu && (
            <RadixAccordion.Content className={Styled.SideBarSubMenu()}>
              {subItems.map(({ subItems, ...restTextProps }, i) => {
                return (
                  <Item
                    key={`${restTextProps?.text}-${i}-sub-item`}
                    {...restTextProps}
                    icon={<BsDot />}
                  />
                );
              })}
            </RadixAccordion.Content>
          )}
        </RadixAccordion.Item>
      </RadixAccordion.Root>
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
      {items.map(({ ...restTextProps }, i) => {
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
