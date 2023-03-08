import classNames from "classnames";
import React from "react";
import { addClasseNamePrefix } from "../../../utils/addClasseNamePrefix";

import * as Styled from "./Input.styles";

interface InputProps extends GlobalProps {
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

export function Input({ className, ...restProps }: InputProps) {
  return (
    <Styled.Container
      className={classNames(addClasseNamePrefix("input"), className)}
      {...restProps}
    />
  );
}
