/// <reference types="react" />
import * as Styled from "./FormControl.styles";
export interface FormControlProps extends GlobalProps, Styled.FormControlProps {
    label?: string;
    feedbackText?: string;
    required?: boolean;
}
export declare function FormControl({ children, id, label, className, required, feedbackText, state, css, ...restProps }: FormControlProps): JSX.Element;
