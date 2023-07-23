// import { ReactNode } from "react";
import React from "react";
import { colors } from "../../../../styles/colors";
import * as Styled from "./Spinner.style";
import { addClasseNamePrefix } from "../../../../utils/addClasseNamePrefix";
import classNames from "classnames";
import { rem } from "polished";
import { CSS } from "../../../../styles/theme";
import { GlobalProps } from "../../../../types/GlobalProps";

export interface SpinnerProps extends GlobalProps {
  size?: number;
  color?: string;
}

export function Spinner({
  size = 24,
  color = colors.primary,
  css = {},
  ...restProps
}: SpinnerProps) {
  const cssSpinner: CSS = {
    size: rem(size),
    span: {
      display: "block",
      position: "absolute",
      borderRadius: "50%",
      margin: rem(0.1 * size),
      border: `${rem(0.1 * size)} solid ${color}`,
      size: rem(0.8 * size),
      borderColor: `${color} transparent transparent transparent`,
    },
    ...css,
  };

  return (
    <span
      className={classNames(
        addClasseNamePrefix("spinner"),
        Styled.Spinner({ css: cssSpinner })
      )}
      {...restProps}
    >
      <span /> <span /> <span />
    </span>
  );
}
