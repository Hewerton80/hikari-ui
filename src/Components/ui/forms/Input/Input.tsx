import { twMerge } from "tailwind-merge";
import React, {
  useMemo,
  useCallback,
  forwardRef,
  ChangeEvent,
  KeyboardEventHandler,
} from "react";
import { addClasseNamePrefix } from "../../../../utils/addClasseNamePrefix";
import { FormControl, FormControlProps } from "../FormControl/FormControl";
import * as Styled from "./Input.styles";
import { inputMasks } from "./masks";
import { formTextClassName } from "../../../commonStyles/formTextStyle";

export interface InputProps extends FormControlProps {
  type?: "text" | "email" | "password" | "number";
  value?: string;
  mask?: keyof typeof inputMasks;
  defaultValue?: string;
  placeholder?: string;
  autoFocus?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  rightIcon?: JSX.Element;
  leftItcon?: JSX.Element;
  min?: number;
  max?: number;
  onFocus?: () => void;
  onBlur?: () => void;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onKeyUp?: KeyboardEventHandler<HTMLInputElement>;
  maxLength?: number;
}

export const Input = forwardRef(
  (
    {
      label,
      className,
      feedbackText,
      mask,
      state,
      placeholder,
      css,
      leftItcon,
      rightIcon,
      onChange,
      ...restProps
    }: InputProps,
    ref: any
  ) => {
    const matchMask = useMemo(() => mask && inputMasks[mask], [mask]);
    const handleChangeInput = useCallback(
      (e: ChangeEvent<HTMLInputElement>) => {
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
            className={twMerge(
              addClasseNamePrefix("input"),
              leftItcon && addClasseNamePrefix("with-left-icon"),
              rightIcon && addClasseNamePrefix("with-right-icon"),
              formTextClassName,
              leftItcon && "pl-[2.875rem]",
              rightIcon && "pr-[2.875rem]"
            )}
            onChange={handleChangeInput}
            placeholder={matchMask?.placeholder || placeholder}
            {...restProps}
          />
          {leftItcon && <span className="left-0">{leftItcon}</span>}
          {rightIcon && <span className="right-0">{rightIcon}</span>}
        </FormControl>
      </>
    );
  }
);
