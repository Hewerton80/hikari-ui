import React from "react";
import * as RadixTabs from "@radix-ui/react-tabs";
import * as Styled from "./Tab.styles";
import { addClasseNamePrefix } from "../../../utils/addClasseNamePrefix";
import classNames from "classnames";

interface TabProviderProps extends Pick<GlobalProps, "children"> {
  value?: number;
  onValueChange?: (value: number) => void;
}

interface TabsProps extends GlobalProps {}
interface TabProps extends GlobalProps {
  value: number;
}

export function TabProvider({
  children,
  value,
  onValueChange,
  ...restProps
}: TabProviderProps) {
  return (
    <RadixTabs.Root
      // className={classNames(
      //   addClasseNamePrefix("tab-root"),
      //   Styled.TabProvider({ css }),
      //   className
      // )}
      asChild
      value={String(value)}
      onValueChange={(newValue) => onValueChange?.(Number(newValue))}
      {...restProps}
      // className="flex flex-col w-[300px] shadow-[0_2px_10px] shadow-blackA4"
      // defaultValue="tab1"
    >
      {children}
    </RadixTabs.Root>
  );
}

export function Tabs({ children, className, css, ...restProps }: TabsProps) {
  return (
    <RadixTabs.List
      className={classNames(
        addClasseNamePrefix("tabs"),
        Styled.Tabs({ css }),
        className
      )}
      {...restProps}
    >
      {children}
    </RadixTabs.List>
  );
}

export function Tab({
  children,
  className,
  value,
  css,
  ...restProps
}: TabProps) {
  return (
    <RadixTabs.Trigger
      className={classNames(
        addClasseNamePrefix("tab"),
        Styled.Tab({ css }),
        className
      )}
      value={String(value)}
      {...restProps}
    >
      {children}
    </RadixTabs.Trigger>
  );
}
