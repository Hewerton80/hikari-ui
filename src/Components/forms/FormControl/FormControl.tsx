import classNames from "classnames";
import React from "react";
import { addClasseNamePrefix } from "../../../utils/addClasseNamePrefix";
import { FormLabel } from "../FormLabel";
import * as Styled from "./FormControl.styles";

export interface FormControlProps
  extends Pick<GlobalProps, "className" | "children" | "id"> {
  label?: string;
  required?: boolean;
}

export function FormControl({
  children,
  id,
  label,
  className,
  ...restProps
}: FormControlProps) {
  return (
    <Styled.Container
      className={classNames(addClasseNamePrefix("form-control"), className)}
    >
      {label?.trim() && (
        <FormLabel htmlFor={id} {...restProps}>
          {label?.trim()}
        </FormLabel>
      )}
      {children}
    </Styled.Container>
  );
}
