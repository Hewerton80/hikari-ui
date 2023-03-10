import classNames from "classnames";
import React from "react";
import { addClasseNamePrefix } from "../../../utils/addClasseNamePrefix";
import * as Styled from "./Card.styles";

export interface CardProps extends GlobalProps, Styled.ContainerProps {}
export interface CardImgProps extends GlobalProps, Styled.ContainerImgProps {
  src: string;
  alt?: string;
}
export interface CardHeaderProps extends GlobalProps {}
export interface CardBodyProps extends GlobalProps {}
export interface CardFooterProps
  extends GlobalProps,
    Styled.ContainerFooterProps {}

function Card({
  children,
  className,
  variantStyle = "default",
  ...restProps
}: CardProps) {
  return (
    <Styled.Container
      className={classNames(addClasseNamePrefix("card"), className)}
      variantStyle={variantStyle}
      {...restProps}
    >
      {children}
    </Styled.Container>
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
    <Styled.ContainerImg
      className={classNames(addClasseNamePrefix("card-img"), className)}
      src={src}
      alt={alt}
      loading="lazy"
      {...restProps}
    />
  );
}

function Header({ children, className, ...restProps }: CardHeaderProps) {
  return (
    <Styled.ContainerHeader
      className={classNames(addClasseNamePrefix("card-header"), className)}
      {...restProps}
    >
      {children}
    </Styled.ContainerHeader>
  );
}

function Title({ children, className, ...rest }: CardProps) {
  return (
    <Styled.ContainerTitle
      className={classNames(addClasseNamePrefix("card-title"), className)}
      {...rest}
    >
      <h4>{children}</h4>
    </Styled.ContainerTitle>
  );
}

function Body({ children, className, ...rest }: CardBodyProps) {
  return (
    <Styled.ContainerBody
      className={classNames(addClasseNamePrefix("card-body"), className)}
      {...rest}
    >
      {children}
    </Styled.ContainerBody>
  );
}

function Footer({
  children,
  className,
  variantStyle = "left",
  ...rest
}: CardFooterProps) {
  return (
    <Styled.ContainerFooter
      className={classNames(addClasseNamePrefix("card-footer"), className)}
      variantStyle={variantStyle}
      {...rest}
    >
      {children}
    </Styled.ContainerFooter>
  );
}

Card.Header = Header;
Card.Title = Title;
Card.Img = Img;
Card.Body = Body;
Card.Footer = Footer;

export { Card };
