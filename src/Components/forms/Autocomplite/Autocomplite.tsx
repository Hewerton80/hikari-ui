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

export interface AutoCompliteOption {
  value: string;
  label: string;
}

export type OnchangeSigleValue = (
  newValue: SingleValue<AutoCompliteOption>
) => void;

export type OnchangeMultValue = (
  newValue: AutoCompliteOption[],
  actionMeta: ActionMeta<AutoCompliteOption>
) => void;

export interface AutocompliteProps extends FormControlProps {
  options: AutoCompliteOption[];
  value?: PropsValue<AutoCompliteOption>;
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

export function Autocomplite({
  label,
  className,
  feedbackText,
  isMulti,
  state,
  css,
  onChange,
  ...restProps
}: AutocompliteProps) {
  const handleChange = React.useCallback(
    (
      newValue: AutoCompliteOption | MultiValue<AutoCompliteOption>,
      actionMeta: ActionMeta<AutoCompliteOption>
    ) => {
      if (isMulti) {
        onChange?.(
          newValue as AutoCompliteOption[] & AutoCompliteOption,
          actionMeta as ActionMeta<AutoCompliteOption>
        );
      } else {
        onChange?.(newValue as AutoCompliteOption[] & AutoCompliteOption, null);
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
        isSearchable
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
