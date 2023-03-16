// import { ReactNode } from "react";
import React from "react";
import { colors } from "../../../styles/colors";
import * as Styled from "./Spinner.style";
import { addClasseNamePrefix } from "../../../utils/addClasseNamePrefix";
import classNames from "classnames";
import { rem } from "polished";
import { CSS } from "../../../styles/theme";

export interface SpinnerProps extends GlobalProps {
  size?: number;
  color?: string;
}

export function Spinner({
  size = 24,
  color = colors.primary,
  css,
  ...restProps
}: SpinnerProps) {
  const cssSppiner: CSS = {
    size: rem(size),
    div: {
      margin: rem(0.1 * size),
      border: `${rem(0.1 * size)} solid ${color}`,
      size: rem(0.8 * size),
      borderColor: `${color} transparent transparent transparent`,
    },
    ...css,
  };

  return (
    <div
      className={classNames(
        addClasseNamePrefix("spinner"),
        Styled.Spinner({ css: cssSppiner })
      )}
      {...restProps}
    >
      <div /> <div /> <div />
    </div>
  );
}
