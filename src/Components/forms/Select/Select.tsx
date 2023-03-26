import React from "react";
import classnames from "classnames";
import { FormControl, FormControlProps } from "../FormControl";
import * as Styled from "./Select.styles";
import { addClasseNamePrefix } from "../../../utils/addClasseNamePrefix";

export interface SelectOption {
  value: string;
  label: string;
  selected?: boolean;
}
export interface SelectProps extends Omit<FormControlProps, "children"> {
  value?: string | ReadonlyArray<string> | number | undefined;
  options?: SelectOption[];
  required?: boolean;
  defaultValue?: string;
  placeholder?: string;
  autoFocus?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  onFocus?: () => void;
  onBlur?: () => void;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export function Select({
  className,
  state = "danger",
  feedbackText,
  options,
  label,
  ...restProps
}: SelectProps) {
  return (
    <FormControl
      className={className}
      id={restProps?.id}
      label={label}
      feedbackText={feedbackText}
      state={state}
      required={restProps?.required}
    >
      <select
        className={classnames(addClasseNamePrefix("select"), Styled.Select())}
        {...restProps}
      >
        {options?.map((option) => (
          <option
            key={option.value}
            value={option.value}
            selected={option?.selected}
          >
            {option.label}
          </option>
        ))}
      </select>
    </FormControl>
  );
}
