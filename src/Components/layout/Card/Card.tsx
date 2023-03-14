import classNames from "classnames";
import React from "react";
import { addClasseNamePrefix } from "../../../utils/addClasseNamePrefix";
import * as Styled from "./Card.styles";

export interface CardProps extends GlobalProps, Styled.CardProps {}
export interface CardImgProps extends GlobalProps, Styled.CardImgProps {
  src: string;
  alt?: string;
}
export interface CardHeaderProps extends GlobalProps {}
export interface CardBodyProps extends GlobalProps {}
export interface CardFooterProps extends GlobalProps, Styled.CardFooterProps {}

function Card({
  children,
  className,
  variantStyle = "default",
  ...restProps
}: CardProps) {
  return (
    <div
      className={classNames(
        addClasseNamePrefix("card"),
        Styled.Card({ variantStyle }),
        className
      )}
      {...restProps}
    >
      {children}
    </div>
  );
}

function Img({
  children,
  src,
  alt,
  className,
  variantStyle = "top",
  ...restProps
}: CardImgProps) {
  return (
    <img
      className={classNames(
        addClasseNamePrefix("card-img"),
        Styled.CardImg({ variantStyle }),
        className
      )}
      src={src}
      alt={alt}
      loading="lazy"
      {...restProps}
    />
  );
}

function Header({ children, className, ...restProps }: CardHeaderProps) {
  return (
    <div
      className={classNames(
        addClasseNamePrefix("card-header"),
        Styled.CardHeader(),
        className
      )}
      {...restProps}
    >
      {children}
    </div>
  );
}

function Title({ children, className, ...rest }: CardProps) {
  return (
    <div
      className={classNames(
        addClasseNamePrefix("card-title"),
        Styled.CardTitle(),
        className
      )}
      {...rest}
    >
      <h4>{children}</h4>
    </div>
  );
}

function Body({ children, className, ...rest }: CardBodyProps) {
  return (
    <div
      className={classNames(
        addClasseNamePrefix("card-body"),
        Styled.CardBody(),
        // darkTheme,
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
}

function Footer({
  children,
  className,
  variantStyle = "left",
  ...rest
}: CardFooterProps) {
  return (
    <div
      className={classNames(
        addClasseNamePrefix("card-footer"),
        Styled.CardFooter({ variantStyle }),
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
}

Card.Header = Header;
Card.Title = Title;
Card.Img = Img;
Card.Body = Body;
Card.Footer = Footer;

export { Card };
