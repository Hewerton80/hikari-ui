/// <reference types="react" />
import * as Styled from "./Alert.styles";
export interface AlertProps extends GlobalProps, Styled.AlertProps {
}
export declare function Alert({ children, className, variantStyle, css, ...restProps }: AlertProps): JSX.Element;
