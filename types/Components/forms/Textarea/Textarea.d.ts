import React from "react";
import { FormControlProps } from "../FormControl";
export interface TextareaProps extends FormControlProps {
    required?: boolean;
    label?: string;
    value?: string;
    defaultValue?: string;
    placeholder?: string;
    autoFocus?: boolean;
    disabled?: boolean;
    readOnly?: boolean;
    onFocus?: () => void;
    onBlur?: () => void;
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    onKeyUp?: React.KeyboardEventHandler<HTMLTextAreaElement>;
    maxLength?: number;
}
export declare function Textarea({ label, className, feedbackText, state, css, ...restProps }: TextareaProps): JSX.Element;
