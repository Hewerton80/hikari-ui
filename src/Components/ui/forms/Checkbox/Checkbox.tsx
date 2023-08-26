import { twMerge } from "tailwind-merge";
import React from "react";
import { FormControl, FormControlProps } from "../FormControl/FormControl";
import * as Styled from "./Checkbox.styles";
import * as RadixCheckbox from "@radix-ui/react-checkbox";
import { addClasseNamePrefix } from "../../../../utils/addClasseNamePrefix";
import { FaCheck } from "react-icons/fa";

export interface CheckboxProps
  extends Styled.CheckboxProps,
    Omit<FormControlProps, "children" | "feedbackText" | "state"> {
  checked?: boolean;
  disabled?: boolean;
  onCheckedChange?: (checked: boolean) => void;
}

export function Checkbox({
  className,
  label,
  labelOrientation = "top",
  css,
  ...restProps
}: CheckboxProps) {
  return (
    <FormControl
      className={twMerge(
        className,
        Styled.FormControlCheckbox({ labelOrientation })
      )}
      id={restProps?.id}
      label={label}
      required={restProps?.required}
    >
      <RadixCheckbox.Root
        className={twMerge(
          addClasseNamePrefix("checkbox-root"),
          Styled.CheckboxRoot({ css })
        )}
        {...restProps}
      >
        <RadixCheckbox.Indicator
          className={twMerge(
            addClasseNamePrefix("checkbox-indicator"),
            Styled.CheckboxIndcator()
          )}
        >
          <FaCheck />
        </RadixCheckbox.Indicator>
      </RadixCheckbox.Root>
    </FormControl>
  );
}
