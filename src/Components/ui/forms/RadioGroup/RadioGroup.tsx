import React from "react";

import * as Styled from "./RadioGroup.styles";
import { FormControl, FormControlProps } from "../FormControl/FormControl";
import { twMerge } from "tailwind-merge";
import * as RadixRadioGroup from "@radix-ui/react-radio-group";
import { addClasseNamePrefix } from "../../../../utils/addClasseNamePrefix";
import { Text } from "../../../ui/typography/Text";
import { GlobalProps } from "../../../../types/GlobalProps";

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
        className={twMerge(
          addClasseNamePrefix("radio-group"),
          Styled.RadioGroup({ orientation, css }),
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
      className={twMerge(className, Styled.FormControlRadio({ css }))}
      id={restProps?.id}
      label={label}
      required={restProps?.required}
    >
      <RadixRadioGroup.Item
        className={twMerge(className, Styled.RadioItem())}
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
