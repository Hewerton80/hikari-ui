import React from "react";
import * as RadixTabs from "@radix-ui/react-tabs";
import * as Styled from "./Tab.styles";
import { addClasseNamePrefix } from "../../../../utils/addClasseNamePrefix";
import { twMerge } from "tailwind-merge";
import { GlobalProps } from "../../../../types/GlobalProps";

export interface TabProviderProps extends Pick<GlobalProps, "children"> {
  // value?: number;
  defaultValue?: number;
  onValueChange?: (value: number) => void;
}

export interface TabListProps extends GlobalProps {}
export interface TabProps extends GlobalProps {
  value: number;
}
export interface TabContentProps extends GlobalProps {
  value: number;
}

function TabProvider({
  children,
  // value,
  defaultValue,
  onValueChange,
  ...restProps
}: TabProviderProps) {
  return (
    <RadixTabs.Root
      // className={twMerge(
      //   addClasseNamePrefix("tab-root"),
      //   Styled.TabProvider({ css }),
      //   className
      // )}
      defaultValue={String(defaultValue)}
      asChild
      // value={String(value)}
      onValueChange={(newValue) => onValueChange?.(Number(newValue))}
      {...restProps}
      // className="flex flex-col w-[300px] shadow-[0_2px_10px] shadow-blackA4"
      // defaultValue="tab1"
    >
      <>{children}</>
    </RadixTabs.Root>
  );
}

function Tabs({ children, className, css, ...restProps }: TabListProps) {
  return (
    <RadixTabs.List
      className={twMerge(
        addClasseNamePrefix("tabs"),
        Styled.Tabs({ css }),
        className
      )}
      {...restProps}
    >
      <>{children}</>
    </RadixTabs.List>
  );
}

function Tab({ children, className, value, css, ...restProps }: TabProps) {
  return (
    <RadixTabs.Trigger
      className={twMerge(
        addClasseNamePrefix("tab"),
        Styled.Tab({ css }),
        className
      )}
      value={String(value)}
      {...restProps}
    >
      <>{children}</>
    </RadixTabs.Trigger>
  );
}

function TabContent({
  children,
  className,
  value,
  css,
  ...restProps
}: TabContentProps) {
  return (
    <RadixTabs.Content
      className={twMerge(
        addClasseNamePrefix("tab-content"),
        Styled.TabContent({ css }),
        className
      )}
      value={String(value)}
      {...restProps}
    >
      <>{children}</>
    </RadixTabs.Content>
  );
}

Tab.Provider = TabProvider;
Tab.List = Tabs;
Tab.Content = TabContent;

export { Tab };
