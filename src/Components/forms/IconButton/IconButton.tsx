import React from "react";
import { Button, ButtonProps } from "../Button";
import classnames from "classnames";
import * as Styled from "./IconButton.styles";
import { addClasseNamePrefix } from "../../../utils/addClasseNamePrefix";

type ButtonPropsOmited = Omit<
  ButtonProps,
  | "leftIcon"
  | "rightIcon"
  | "children"
  | "fullWidth"
  // | "variantStyle"
  | "size"
  | "rounded"
>;

const sizeButton = {
  sm: { dimensions: "!h-8 !w-8", textIcon: "!text-base" },
  md: { dimensions: "!h-11 !w-11", textIcon: "!text-lg" },
  lg: { dimensions: "!h-12 !w-12", textIcon: "!text-xl" },
};

interface IconButtonProps extends ButtonPropsOmited, Styled.IconButtonProps {
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
        // "rounded-full !px-0 !py-0",
        // sizeButton[size].dimensions,
        Styled.IconButton({ css, size }),
        className
      )}
      {...restProps}
    >
      {icon}
    </Button>
  );
}
