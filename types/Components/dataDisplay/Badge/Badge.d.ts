/// <reference types="react" />
import * as Styled from "./Badge.styles";
export interface BadgeProps extends GlobalProps, Styled.BadgeProps {
}
export declare function Badge({ className, variantStyle, children, css, ...restProps }: BadgeProps): JSX.Element;
