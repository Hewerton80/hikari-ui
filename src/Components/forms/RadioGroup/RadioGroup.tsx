import React from "react";

import * as Styled from "./RadioGroup.styles";
import { FormControl, FormControlProps } from "../FormControl";
import classNames from "classnames";
import * as RadixRadioGroup from "@radix-ui/react-radio-group";
import { addClasseNamePrefix } from "../../../utils/addClasseNamePrefix";
import { Text } from "../../typography/Text";

export interface RadioGroupProps extends GlobalProps, Styled.RadioGroupProps {
  label?: string;
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
}

function RadioGroup({
  className,
  label,
  css,
  children,
  orientation = "vertical",
  ...restProps
}: RadioGroupProps) {
  return (
    <>
      {label && <Text css={{ text: "sm", marginBottom: "$2" }}>{label}</Text>}
      <RadixRadioGroup.Root
        className={classNames(
          addClasseNamePrefix("radio-group"),
          Styled.RadioGroup({ orientation }),
          className,
          "flex flex-col gap-2.5"
        )}
        {...restProps}
      >
        {children}
      </RadixRadioGroup.Root>
    </>
  );
}

export interface RadioItemProps
  extends Omit<
    FormControlProps,
    "children" | "labelOrientation" | "feedbackText" | "state"
  > {
  value: string;
  disabled?: boolean;
}

function RadioItem({ className, label, css, ...restProps }: RadioItemProps) {
  return (
    <FormControl
      className={classNames(className, Styled.FormControlRadio({}))}
      id={restProps?.id}
      label={label}
      required={restProps?.required}
    >
      <RadixRadioGroup.Item
        className={classNames(className, Styled.RadioItem())}
        aria-label="View density"
        {...restProps}
      >
        <RadixRadioGroup.Indicator className={Styled.RadioIdicator()} />
      </RadixRadioGroup.Item>
    </FormControl>
  );
}

RadioGroup.Item = RadioItem;
export { RadioGroup };
