import React from "react";
import { addClasseNamePrefix } from "../../../../utils/addClasseNamePrefix";
import { Box, BoxProps } from "../../layout/Box";
import { twMerge } from "tailwind-merge";
function AppBar({ className, children, ...restProps }: BoxProps) {
  return (
    <Box
      className={twMerge(
        addClasseNamePrefix("app-bar"),
        // Styled.Appbar(),
        "flex h-20 w-full px-7 bg-purple-500 border border-purple-500 ",
        "dark:bg-zinc-700 dark:border-white/10",
        className
      )}
      asChild
      {...restProps}
    >
      <header>{children}</header>
    </Box>
  );
}

function ToolBar({ className, children, ...restProps }: BoxProps) {
  return (
    <Box
      className={twMerge(
        addClasseNamePrefix("tool-bar"),
        "flex items-center h-full w-full",
        className
      )}
      {...restProps}
    >
      {children}
    </Box>
  );
}
AppBar.Tool = ToolBar;
export { AppBar };
