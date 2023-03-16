import React from "react";
import { addClasseNamePrefix } from "../../../utils/addClasseNamePrefix";
import { FormControl, FormControlProps } from "../FormControl";
import * as Styled from "./Input.styles";

export interface InputProps extends FormControlProps {
  type?:
    | "text"
    | "email"
    | "password"
    | "url"
    | "tel"
    | "time"
    | "datetime-local"
    | "date";
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  autoFocus?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  onFocus?: () => void;
  onBlur?: () => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyUp?: React.KeyboardEventHandler<HTMLInputElement>;
  maxLength?: number;
}

export function Input({
  label,
  className,
  feedbackText,
  state,
  css,
  ...restProps
}: InputProps) {
  return (
    <>
      <FormControl
        className={className}
        id={restProps?.id}
        label={label}
        feedbackText={feedbackText}
        state={state}
        required={restProps?.required}
      >
        <Styled.Container
          className={addClasseNamePrefix("input")}
          {...restProps}
        />
      </FormControl>
    </>
  );
}
