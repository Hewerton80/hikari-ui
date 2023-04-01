import classNames from "classnames";
import React from "react";
import { addClasseNamePrefix } from "../../../utils/addClasseNamePrefix";
import { FormControl, FormControlProps } from "../FormControl";
import * as Styled from "./Input.styles";
import { inputMasks } from "./masks";

export interface InputProps extends FormControlProps {
  type?: "text" | "email" | "password";
  value?: string;
  mask?: keyof typeof inputMasks;
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

export const Input = React.forwardRef(
  (
    {
      label,
      className,
      feedbackText,
      mask,
      state,
      placeholder,
      css,
      onChange,
      ...restProps
    }: InputProps,
    ref: any
  ) => {
    const matchMask = React.useMemo(() => mask && inputMasks[mask], [mask]);
    const handleChangeInput = React.useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        if (matchMask) {
          e.target.value = matchMask.apply(e.target.value);
        }
        onChange?.(e);
      },
      [matchMask, onChange]
    );

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
          <input
            ref={ref}
            className={classNames(addClasseNamePrefix("input"), Styled.Input())}
            onChange={handleChangeInput}
            placeholder={matchMask?.placeholder || placeholder}
            {...restProps}
          />
        </FormControl>
      </>
    );
  }
);
