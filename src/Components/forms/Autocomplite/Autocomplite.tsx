import React from "react";
import { FormControl, FormControlProps } from "../FormControl";
import ReactSelect, { PropsValue, SingleValue, ActionMeta } from "react-select";
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
  actionMeta?: ActionMeta<AutoCompliteOption>
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
  onChange?:
    | ((newValues: AutoCompliteOption[]) => void)
    | ((newValue: SingleValue<AutoCompliteOption>) => void);
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
  ...restProps
}: AutocompliteProps) {
  const onChangeMultValue2 = React.useCallback(
    (
      newValues: AutoCompliteOption[],
      actionMeta?: ActionMeta<AutoCompliteOption>
    ) => {},
    []
  );

  const onChangeSingleValue2 = React.useCallback(
    (newValue: SingleValue<AutoCompliteOption>) => {},
    []
  );

  const handleChange = React.useMemo(() => {
    return isMulti ? onChangeMultValue2 : onChangeSingleValue2;
  }, [isMulti, onChangeMultValue2, onChangeSingleValue2]);

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
