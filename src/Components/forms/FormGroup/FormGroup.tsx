import classNames from "classnames";
import React from "react";
import { addClasseNamePrefix } from "../../../utils/addClasseNamePrefix";

import * as Styled from "./FormGroup.styles";

interface FormGroupProps extends GlobalProps {}

export function FormGroup({
  children,
  className,
  ...restProps
}: FormGroupProps) {
  return (
    <Styled.Container
      className={classNames(addClasseNamePrefix("form-group"), className)}
      {...restProps}
    >
      {children}
    </Styled.Container>
  );
}
