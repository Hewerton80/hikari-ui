import classNames from "classnames";
import React from "react";
import { addClasseNamePrefix } from "../../../utils/addClasseNamePrefix";
import * as Styled from "./FormControl.styles";

export interface FormControlProps
  extends GlobalProps,
    Styled.ConteinerProps,
    Styled.ContainerLabelProps {
  label?: string;
  feedbackText?: string;
}

export function FormControl({
  children,
  id,
  label,
  className,
  required,
  feedbackText,
  state = "danger",
  style,
  ...restProps
}: FormControlProps) {
  const hasFeedback = React.useMemo(
    () => Boolean(feedbackText?.trim()),
    [feedbackText]
  );

  return (
    <Styled.Container
      className={classNames(addClasseNamePrefix("form-control"), className)}
      state={state}
      hasFeedback={hasFeedback}
      {...restProps}
    >
      {label?.trim() && (
        <Styled.ContainerLabel htmlFor={id} required={required}>
          {label?.trim()}
        </Styled.ContainerLabel>
      )}
      {children}
      {hasFeedback && (
        <p className={addClasseNamePrefix("feedback")}>{feedbackText}</p>
      )}
    </Styled.Container>
  );
}
