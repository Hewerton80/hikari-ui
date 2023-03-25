import React from "react";
import * as Styled from "./Button.styles";
interface NativeButtonProps extends Pick<React.ButtonHTMLAttributes<HTMLButtonElement>, "type" | "onClick" | "disabled"> {
}
export interface ButtonProps extends Styled.ButtonProps, GlobalProps, NativeButtonProps {
    isLoading?: boolean;
    fullWidth?: boolean;
    asChild?: boolean;
    rounded?: boolean;
    leftIcon?: JSX.Element;
    rightIcon?: JSX.Element;
}
export declare function Button({ children, className, size, asChild, variantStyle, fullWidth, rounded, leftIcon, rightIcon, disabled, isLoading, css, ...restProps }: ButtonProps): JSX.Element;
export {};
