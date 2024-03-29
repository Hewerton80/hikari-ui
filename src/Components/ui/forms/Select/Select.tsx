import React, { useCallback } from "react";
import { FormControl, FormControlProps } from "../FormControl/FormControl";
import ReactSelect, { PropsValue, SingleValue } from "react-select";
import { twMerge } from "tailwind-merge";
import { Spinner } from "../../feedback/Spinner";
import { colors } from "../../../../styles/colors";
import * as Styled from "./Select.styles";
import { addClasseNamePrefix } from "../../../../utils/addClasseNamePrefix";

export interface SelectOption {
  value?: string;
  label: string;
  options?: SelectOption[];
}

export type OnchangeSigleValue = (newValue: SingleValue<SelectOption>) => void;

// export { ActionMeta };

export type OnchangeMultValue = (
  newValue: SelectOption[],
  actionMeta: any
  // actionMeta: ActionMeta<SelectOption>
) => void;

export interface SelectProps extends FormControlProps {
  options: SelectOption[];
  value?: PropsValue<SelectOption> | null;
  isAutocomplite?: boolean;
  isDisabled?: boolean;
  isLoading?: boolean;
  inputValue?: string;
  placeholder?: string;
  isMulti?: boolean;
  onChangeSingleOption?: OnchangeSigleValue;
  onchangeMultValue?: OnchangeMultValue;
  onInputChange?: (newValue: string) => void;
  autoFocus?: boolean;
}

export function Select({
  label,
  isAutocomplite = false,
  className,
  feedbackText,
  isMulti,
  state,
  css,
  onChangeSingleOption,
  onchangeMultValue,
  ...restProps
}: SelectProps) {
  const handleChange = useCallback(
    (newValue: SingleValue<SelectOption> | SelectOption[], actionMeta: any) => {
      if (isMulti) {
        onchangeMultValue?.(newValue as SelectOption[], actionMeta);
      } else {
        onChangeSingleOption?.(newValue as SingleValue<SelectOption>);
      }
    },
    [isMulti, onChangeSingleOption, onchangeMultValue]
  );

  return (
    <FormControl
      className={className}
      id={restProps?.id}
      label={label}
      feedbackText={feedbackText}
      state={state}
      required={restProps?.required}
    >
      <ReactSelect
        classNamePrefix="select"
        className={twMerge(
          addClasseNamePrefix("select"),
          Styled.ReactSelect({ css }),
          className
        )}
        formatGroupLabel={(oprions) => (
          <>
            <span>{oprions.label}</span>{" "}
            <span>({oprions?.options?.length})</span>
          </>
        )}
        onChange={handleChange}
        isMulti={isMulti}
        isSearchable={isAutocomplite}
        noOptionsMessage={() => ""}
        loadingMessage={() => (
          <div className="flex w-full justify-center">
            <Spinner color={colors.info} />
          </div>
        )}
        {...restProps}
      />
    </FormControl>
  );
}
