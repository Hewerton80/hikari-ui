import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { addClasseNamePrefix } from "../../../utils/addClasseNamePrefix";
import classNames from "classnames";
import * as Styled from "./Modal.styles";
import { FaTimes } from "react-icons/fa";
import { GlobalProps } from "../../../types/GlobalProps";

export interface ModalProps extends GlobalProps, Styled.ModalProps {
  show?: boolean;
  onClose?: () => void;
}
export interface ModalTitleProps extends GlobalProps {}
export interface ModalBodyProps extends GlobalProps {}
export interface ModalFooterProps
  extends GlobalProps,
    Styled.ModalFooterProps {}

function Modal({
  children,
  size = "md",
  css,
  className,
  show,
  onClose,
  ...restProps
}: ModalProps) {
  return (
    <Dialog.Root
      open={show}
      // onOpenChange={(open) => !open && onClose?.()}
    >
      <Dialog.Portal>
        <Dialog.Overlay className={Styled.Overlay()} onClick={onClose} />
        <Dialog.Content
          onOpenAutoFocus={(e) => e.preventDefault()}
          className={classNames(
            addClasseNamePrefix("modal"),
            Styled.Content({ size, css }),
            className
          )}
          {...restProps}
        >
          {children}
          <Dialog.Close
            asChild
            className={Styled.Close()}
            onClick={() => onClose?.()}
            role="button"
            aria-label="Close"
          >
            <span>
              <FaTimes />
            </span>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
const Title = ({ children, className, css }: ModalTitleProps) => {
  return (
    <Dialog.Title
      className={classNames(
        addClasseNamePrefix("modal-title"),
        Styled.Title({ css }),
        className
      )}
    >
      <h5>{children}</h5>
    </Dialog.Title>
  );
};

const Body = ({ children, className, css }: ModalBodyProps) => {
  return (
    <div
      className={classNames(
        addClasseNamePrefix("modal-body"),
        Styled.Body({ css }),
        className
      )}
    >
      {children}
    </div>
  );
};

function Footer({
  children,
  className,
  css,
  position = "end",
  ...rest
}: ModalFooterProps) {
  return (
    <div
      className={classNames(
        addClasseNamePrefix("modal-footer"),
        Styled.Footer({ position, css }),
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
}

Modal.Title = Title;
Modal.Body = Body;
Modal.Footer = Footer;

export { Modal };
