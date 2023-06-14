import classNames from "classnames";
import React from "react";
import { addClasseNamePrefix } from "../../../../utils/addClasseNamePrefix";
import * as Styled from "./FormControl.styles";
import { GlobalProps } from "../../../../types/GlobalProps";

export interface FormControlProps extends GlobalProps, Styled.FormControlProps {
  label?: string;
  feedbackText?: string;
  required?: boolean;
}

export function FormControl({
  children,
  id,
  label,
  className,
  required,
  feedbackText,
  state = "danger",
  css,
  ...restProps
}: FormControlProps) {
  return (
    <div
      className={classNames(
        addClasseNamePrefix("form-control"),
        Styled.FormControl({ state: feedbackText ? state : undefined, css }),
        className
      )}
      {...restProps}
    >
      {label?.trim() && (
        <label
          htmlFor={id}
          className={Styled.Label({ required: required ? "true" : "false" })}
        >
          {label?.trim()}
        </label>
      )}
      {children}
      {feedbackText?.trim() && (
        <p className={addClasseNamePrefix("feedback")}>{feedbackText}</p>
      )}
    </div>
  );
}
