import React from "react";
import { Button, ButtonProps } from "../Button";
import classnames from "classnames";
import * as Styled from "./IconButton.styles";
import { addClasseNamePrefix } from "../../../utils/addClasseNamePrefix";

type ButtonPropsOmited = Omit<
  ButtonProps,
  "leftIcon" | "rightIcon" | "children" | "fullWidth" | "size" | "rounded"
>;

export interface IconButtonProps
  extends ButtonPropsOmited,
    Styled.IconButtonProps {
  icon?: JSX.Element;
}

export function IconButton({
  icon,
  className,
  size = "md",
  css,
  ...restProps
}: IconButtonProps) {
  return (
    <Button
      className={classnames(
        addClasseNamePrefix("icon-btn"),
        Styled.IconButton({ css, size }),
        className
      )}
      {...restProps}
    >
      {icon}
    </Button>
  );
}
