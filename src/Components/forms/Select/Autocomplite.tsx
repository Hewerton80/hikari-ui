import React from "react";
import { FormControl, FormControlProps } from "../FormControl";
import ReactSelect, {
  PropsValue,
  SingleValue,
  ActionMeta,
  MultiValue,
} from "react-select";
import classNames from "classnames";
import { Spinner } from "../../feedback/Spinner";
import { colors } from "../../../styles/colors";
import * as Styled from "./Autocomplite.styles";
import { addClasseNamePrefix } from "../../../utils/addClasseNamePrefix";

export interface SelectOption {
  value: string;
  label: string;
}

export type OnchangeSigleValue = (newValue: SingleValue<SelectOption>) => void;

export type OnchangeMultValue = (
  newValue: SelectOption[],
  actionMeta: ActionMeta<SelectOption>
) => void;

export interface SelectProps extends FormControlProps {
  options: SelectOption[];
  value?: PropsValue<SelectOption>;
  isAutocomplite?: boolean;
  isDisabled?: boolean;
  isLoading?: boolean;
  isMulti?: boolean;
  inputValue?: string;
  name?: string;
  placeholder?: string;
  feedbackText?: string;
  onChange?: OnchangeSigleValue | OnchangeMultValue;
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
  onChange,
  ...restProps
}: SelectProps) {
  const handleChange = React.useCallback(
    (
      newValue: SelectOption | MultiValue<SelectOption>,
      actionMeta: ActionMeta<SelectOption>
    ) => {
      if (isMulti) {
        onChange?.(
          newValue as SelectOption[] & SelectOption,
          actionMeta as ActionMeta<SelectOption>
        );
      } else {
        onChange?.(newValue as SelectOption[] & SelectOption, null);
      }
    },
    [isMulti, onChange]
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
        classNamePrefix="auto-complite"
        className={classNames(
          addClasseNamePrefix("auto-complite"),
          Styled.ReactSelect(),
          className
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
