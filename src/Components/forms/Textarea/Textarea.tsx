import React from "react";
import { FormControl, FormControlProps } from "../FormControl";
import { addClasseNamePrefix } from "../../../utils/addClasseNamePrefix";
import * as Styled from "./Textarea.styles";

export interface TextareaProps extends FormControlProps {
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
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onKeyUp?: React.KeyboardEventHandler<HTMLTextAreaElement>;
  maxLength?: number;
}

export function Textarea({
  label,
  className,
  feedbackText,
  state,
  css,
  ...restProps
}: TextareaProps) {
  return (
    <FormControl
      className={className}
      id={restProps?.id}
      label={label}
      feedbackText={feedbackText}
      state={state}
      required={restProps?.required}
    >
      <Styled.Container
        className={addClasseNamePrefix("textarea")}
        {...restProps}
      />
    </FormControl>
  );
}
