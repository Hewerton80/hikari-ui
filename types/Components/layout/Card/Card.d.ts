/// <reference types="react" />
import * as Styled from "./Card.styles";
export interface CardProps extends GlobalProps, Styled.CardProps {
}
export interface CardImgProps extends GlobalProps, Styled.CardImgProps {
    src: string;
    alt?: string;
}
export interface CardHeaderProps extends GlobalProps {
}
export interface CardBodyProps extends GlobalProps {
}
export interface CardFooterProps extends GlobalProps, Styled.CardFooterProps {
}
declare function Card({ children, className, variantStyle, css, ...restProps }: CardProps): JSX.Element;
declare namespace Card {
    var Header: ({ children, className, css, ...restProps }: CardHeaderProps) => JSX.Element;
    var Title: ({ children, className, css, ...rest }: CardProps) => JSX.Element;
    var Img: ({ children, src, alt, className, variantStyle, css, ...restProps }: CardImgProps) => JSX.Element;
    var Body: ({ children, className, css, ...rest }: CardBodyProps) => JSX.Element;
    var Footer: ({ children, className, variantStyle, css, ...rest }: CardFooterProps) => JSX.Element;
}
export { Card };
