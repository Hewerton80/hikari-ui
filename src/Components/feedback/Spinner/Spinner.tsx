// import { ReactNode } from "react";
import React from "react";
import { colors } from "../../../styles/colors";
import * as Styled from "./Spinner.style";
import { addClasseNamePrefix } from "../../../utils/addClasseNamePrefix";

export interface SpinnerProps extends Styled.ContainerProps {}

export function Spinner({ size = 24, color = colors.primary }: SpinnerProps) {
  return (
    <Styled.Container
      className={addClasseNamePrefix("spinner")}
      size={size}
      color={color}
    >
      <div /> <div /> <div />
    </Styled.Container>
  );
}
