import React, { ChangeEvent, KeyboardEventHandler } from "react";
import { FormControl, FormControlProps } from "../FormControl/FormControl";
import { addClasseNamePrefix } from "../../../../utils/addClasseNamePrefix";
import * as Styled from "./Textarea.styles";
import classNames from "classnames";

export interface TextareaProps extends FormControlProps {
  required?: boolean;
  label?: string;
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  autoFocus?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  rows?: number;
  cols?: number;
  onFocus?: () => void;
  onBlur?: () => void;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  onKeyUp?: KeyboardEventHandler<HTMLTextAreaElement>;
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
      <textarea
        className={classNames(
          addClasseNamePrefix("textarea"),
          Styled.Textarea()
        )}
        {...restProps}
      />
    </FormControl>
  );
}
