import React from "react";
import * as Styled from "./AppBar.styles";
import { addClasseNamePrefix } from "../../../../utils/addClasseNamePrefix";
import classNames from "classnames";
import { Box, BoxProps } from "../../layout/Box";

function AppBar({ className, children, ...restProps }: BoxProps) {
  return (
    <Box
      className={classNames(
        addClasseNamePrefix("app-bar"),
        Styled.Appbar(),
        className
      )}
      {...restProps}
    >
      {children}
    </Box>
  );
}

function ToolBar({ className, children, ...restProps }: BoxProps) {
  return (
    <Box
      className={classNames(
        addClasseNamePrefix("tool-bar"),
        Styled.ToolBar(),
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
