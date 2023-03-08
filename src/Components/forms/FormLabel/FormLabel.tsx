import classNames from "classnames";
import React from "react";
import { addClasseNamePrefix } from "../../../utils/addClasseNamePrefix";

import * as Styled from "./FormLabel.styles";

interface FormLabelProps extends GlobalProps, Styled.ContainerProps {
  htmlFor?: string;
}

export function FormLabel({
  children,
  className,
  ...restProps
}: FormLabelProps) {
  return (
    <Styled.Container
      className={classNames(addClasseNamePrefix("form-label"), className)}
      {...restProps}
    >
      {children}
    </Styled.Container>
  );
}
