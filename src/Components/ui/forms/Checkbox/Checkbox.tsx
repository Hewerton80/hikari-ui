import classNames from "classnames";
import React from "react";
import { FormControl, FormControlProps } from "../FormControl";
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
      className={classNames(
        className,
        Styled.FormControlCheckbox({ labelOrientation })
      )}
      id={restProps?.id}
      label={label}
      required={restProps?.required}
    >
      <RadixCheckbox.Root
        className={classNames(
          addClasseNamePrefix("checkbox-root"),
          Styled.CheckboxRoot({ css })
        )}
        {...restProps}
      >
        <RadixCheckbox.Indicator
          className={classNames(
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
