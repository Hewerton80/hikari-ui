/// <reference types="react" />
import { FormControlProps } from "../FormControl";
import { PropsValue, SingleValue, ActionMeta } from "react-select";
export interface IAutoCompliteOption {
    value: string;
    label: string;
}
export type OnchangeSigleValue = (newValue: SingleValue<IAutoCompliteOption>) => void;
export type OnchangeMultValue = (newValue: IAutoCompliteOption[], actionMeta?: ActionMeta<IAutoCompliteOption>) => void;
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
    onChange?: OnchangeSigleValue | OnchangeMultValue;
    onChangeSingleValue?: OnchangeSigleValue;
    onChangeMultValue?: OnchangeMultValue;
    autoFocus?: boolean;
}
export declare function Autocomplite({ label, className, feedbackText, isMulti, onChangeSingleValue, onChangeMultValue, state, css, ...restProps }: AutocompliteProps): JSX.Element;
