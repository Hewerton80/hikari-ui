// import { ReactNode } from "react";
import React from "react";
import { colors } from "../../../src/theme/colors";
import * as Styled from "./Spinner.style";

interface SpinnerProps extends Styled.ContainerProps {}

export function Spinner({ size = 24, color = colors.primary }: SpinnerProps) {
  return (
    <Styled.Container className="spinner" size={size} color={color}>
      <div /> <div /> <div />
    </Styled.Container>
  );
}
