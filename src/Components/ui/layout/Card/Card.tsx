import { twMerge } from "tailwind-merge";
import React from "react";
import { addClasseNamePrefix } from "../../../../utils/addClasseNamePrefix";
import * as Styled from "./Card.styles";
import { GlobalProps } from "../../../../types/GlobalProps";
import { Button, ButtonProps } from "../../forms/Button";
import { Slot } from "@radix-ui/react-slot";

export interface CardProps extends GlobalProps, Styled.CardProps {
  asChild?: boolean;
}
export interface CardImgProps extends GlobalProps, Styled.CardImgProps {
  src: string;
  alt?: string;
}
export interface CardHeaderProps extends GlobalProps {}
export interface CardBodyProps extends GlobalProps {}
export interface CardFooterProps extends GlobalProps, Styled.CardFooterProps {}
export interface CardLinkProps extends Omit<ButtonProps, "variantStyle"> {
  href?: string;
  target?: "_self" | "_blank" | "_parent" | "_top";
}

function Card({
  children,
  className,
  asChild,
  variantStyle = "default",
  css,
  ...restProps
}: CardProps) {
  const Comp = asChild ? Slot : "div";

  return (
    <Comp
      className={twMerge(
        addClasseNamePrefix("card"),
        Styled.Card({ variantStyle, css }),
        className
      )}
      {...restProps}
    >
      {children}
    </Comp>
  );
}

function Img({
  src,
  alt,
  className,
  variantStyle = "top",
  css,
  ...restProps
}: CardImgProps) {
  return (
    <img
      className={twMerge(
        addClasseNamePrefix("card-img"),
        Styled.CardImg({ variantStyle, css }),
        className
      )}
      src={src}
      alt={alt}
      loading="lazy"
      {...restProps}
    />
  );
}

function Header({ children, className, css, ...restProps }: CardHeaderProps) {
  return (
    <div
      className={twMerge(
        addClasseNamePrefix("card-header"),
        Styled.CardHeader({ css }),
        className
      )}
      {...restProps}
    >
      {children}
    </div>
  );
}

function Title({ children, className, css, ...rest }: CardProps) {
  return (
    <div
      className={twMerge(
        addClasseNamePrefix("card-title"),
        Styled.CardTitle({ css }),
        className
      )}
      {...rest}
    >
      <h4>{children}</h4>
    </div>
  );
}

function Body({ children, className, css, ...rest }: CardBodyProps) {
  return (
    <div
      className={twMerge(
        addClasseNamePrefix("card-body"),
        Styled.CardBody({ css }),
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
  css,
  ...rest
}: CardFooterProps) {
  return (
    <div
      className={twMerge(
        addClasseNamePrefix("card-footer"),
        Styled.CardFooter({ variantStyle, css }),
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
function Link({
  children,
  className,
  asChild,
  href,
  target,
  css,
  ...rest
}: CardLinkProps) {
  const Comp = asChild ? Slot : "a";

  return (
    <Button
      asChild
      className={twMerge(addClasseNamePrefix("card-link"), className)}
      variantStyle="info-link"
      css={{ padding: 0, textDecoration: "none", ...css }}
      {...rest}
    >
      <Comp href={href} target={target}>
        {children}
      </Comp>
    </Button>
  );
}

Card.Header = Header;
Card.Title = Title;
Card.Img = Img;
Card.Body = Body;
Card.Footer = Footer;
Card.Link = Link;

export { Card };
