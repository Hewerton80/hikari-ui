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

export interface IAutoCompliteOption {
  value: string;
  label: string;
}

export type OnchangeSigleValue = (
  newValue: SingleValue<IAutoCompliteOption>
) => void;

export type OnchangeMultValue = (
  newValue: IAutoCompliteOption[],
  actionMeta?: ActionMeta<IAutoCompliteOption>
) => void;

type Onchange = (
  newValue: IAutoCompliteOption & MultiValue<IAutoCompliteOption>,
  actionMeta?: ActionMeta<IAutoCompliteOption>
) => void;

export interface AutocompliteProps extends FormControlProps {
  options: IAutoCompliteOption[];
  value?: PropsValue<IAutoCompliteOption>;
  isDisabled?: boolean;
  isLoading?: boolean;
  isMulti?: boolean;
  inputValue?: string;
  name?: string;
  placeholder?: string;
  feedbackText?: string;
  onInputChange?: (newValue: string) => void;
  onChangeSingleValue?: OnchangeSigleValue;
  onChangeMultValue?: OnchangeMultValue;
  autoFocus?: boolean;
}

export function Autocomplite({
  label,
  className,
  feedbackText,
  onChangeSingleValue,
  onChangeMultValue,
  state,
  css,
  ...restProps
}: AutocompliteProps) {
  const handleChange = React.useCallback(
    (
      newValue: IAutoCompliteOption | MultiValue<IAutoCompliteOption>,
      actionMeta?: ActionMeta<IAutoCompliteOption>
    ) => {
      console.log("newValue", newValue);
      if (Array.isArray(newValue)) {
        onChangeMultValue?.(newValue as IAutoCompliteOption[], actionMeta);
      } else {
        onChangeSingleValue?.(newValue as IAutoCompliteOption);
      }
    },
    [onChangeSingleValue, onChangeMultValue]
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
        className={classNames(
          Styled.ReactSelect(),

          {
            // [style.success]: feedbackText && state === 'success',
            // [style.warning]: feedbackText && state === 'warning',
            // [style.danger]: feedbackText && state === 'danger',
          },
          className
        )}
        onChange={handleChange}
        classNamePrefix="auto-complite"
        isSearchable
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
