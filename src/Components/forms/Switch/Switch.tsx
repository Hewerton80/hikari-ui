import React from "react";
import * as RadixSwitch from "@radix-ui/react-switch";
import classNames from "classnames";
import * as Styled from "./Switch.styles";
import { addClasseNamePrefix } from "../../../utils/addClasseNamePrefix";
import { FormControl, FormControlProps } from "../FormControl";

interface SwitchProps
  extends Omit<FormControlProps, "children" | "feedbackText" | "state"> {
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
}

export function Switch({ className, label, css, ...restProps }: SwitchProps) {
  return (
    <FormControl
      className={className}
      id={restProps?.id}
      label={label}
      required={restProps?.required}
    >
      <RadixSwitch.Root
        className={classNames(
          addClasseNamePrefix("switch-root"),
          Styled.SwitchRoot({ css })
        )}
        {...restProps}
      >
        <RadixSwitch.Thumb
          className={classNames(
            addClasseNamePrefix("switch-thumb"),
            Styled.SwitchThumb({})
          )}
        />
      </RadixSwitch.Root>
    </FormControl>
  );
}
