import React from "react";
import { FormControlProps } from "../FormControl";
export interface InputProps extends FormControlProps {
    type?: "text" | "email" | "password" | "url" | "tel" | "time" | "datetime-local" | "date";
    value?: string;
    defaultValue?: string;
    placeholder?: string;
    autoFocus?: boolean;
    disabled?: boolean;
    readOnly?: boolean;
    onFocus?: () => void;
    onBlur?: () => void;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onKeyUp?: React.KeyboardEventHandler<HTMLInputElement>;
    maxLength?: number;
}
export declare function Input({ label, className, feedbackText, state, css, ...restProps }: InputProps): JSX.Element;
