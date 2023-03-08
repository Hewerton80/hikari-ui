import React from "react";
import { addClasseNamePrefix } from "../../../utils/addClasseNamePrefix";
import { FormControl, FormControlProps } from "../FormControl";
import * as Styled from "./Input.styles";

interface InputProps extends FormControlProps {
  type?:
    | "text"
    | "email"
    | "password"
    | "url"
    | "tel"
    | "time"
    | "datetime-local"
    | "date";
  required?: boolean;
  label?: string;
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
  // error?: string;
  // feedbackText?: string;
}

export function Input({ label, className, ...restProps }: InputProps) {
  return (
    <>
      <FormControl
        className={className}
        id={restProps?.id}
        label={label}
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
