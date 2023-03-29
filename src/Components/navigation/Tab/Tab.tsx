import React from "react";
import * as RadixTabs from "@radix-ui/react-tabs";
import * as Styled from "./Tab.styles";
import { addClasseNamePrefix } from "../../../utils/addClasseNamePrefix";
import classNames from "classnames";

interface TabProviderProps extends Pick<GlobalProps, "children"> {
  value?: number;
  onValueChange?: (value: number) => void;
}

interface TabsProps extends GlobalProps {
  // value?: number;
  // onValueChange?: (value: number) => void;
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
    <RadixTabs.Root
      className={classNames(
        addClasseNamePrefix("tabs"),
        Styled.Tabs({ css }),
        className
      )}
      {...restProps}
      // className="flex flex-col w-[300px] shadow-[0_2px_10px] shadow-blackA4"
      // defaultValue="tab1"
    >
      {children}
    </RadixTabs.Root>
  );
}
