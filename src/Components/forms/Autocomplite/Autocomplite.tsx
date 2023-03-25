import React, { useCallback } from "react";
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
  onChange?:
    | ((newValues: IAutoCompliteOption[]) => void)
    | ((newValue: SingleValue<IAutoCompliteOption>) => void);
  onInputChange?: (newValue: string) => void;
  onChangeSingleValue?: OnchangeSigleValue;
  onChangeMultValue?: OnchangeMultValue;
  autoFocus?: boolean;
}

export function Autocomplite({
  label,
  className,
  feedbackText,
  isMulti,
  onChangeSingleValue,
  onChangeMultValue,
  state,
  css,
  ...restProps
}: AutocompliteProps) {
  const handleChange = React.useCallback(
    (newValue: IAutoCompliteOption | MultiValue<IAutoCompliteOption>) => {
      console.log("newValue", newValue);
      if (Array.isArray(newValue)) {
        onChangeMultValue?.(newValue as IAutoCompliteOption[]);
      } else {
        onChangeSingleValue?.(newValue as IAutoCompliteOption);
      }
    },
    [onChangeSingleValue, onChangeMultValue]
  );

  const onChangeMultValue2 = useCallback(
    (
      newValues: IAutoCompliteOption[],
      actionMeta?: ActionMeta<IAutoCompliteOption>
    ) => {},
    []
  );

  const onChangeSingleValue2 = useCallback(
    (newValue: SingleValue<IAutoCompliteOption>) => {},
    []
  );

  const onChange = React.useMemo(() => {
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
        onChange={onChange}
        isMulti={isMulti}
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
