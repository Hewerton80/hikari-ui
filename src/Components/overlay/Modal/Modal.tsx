import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { addClasseNamePrefix } from "../../../utils/addClasseNamePrefix";
import classNames from "classnames";
import * as Styled from "./Modal.styles";
import { FaTimes } from "react-icons/fa";

interface ModalProps extends GlobalProps, Styled.ModalProps {
  show?: boolean;
  onClose?: () => void;
}
interface ModalTitleProps extends GlobalProps {}
interface ModalBodyProps extends GlobalProps {}
interface ModalFooterProps extends GlobalProps {}

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
          className={classNames(
            addClasseNamePrefix("modal"),
            Styled.Content({ size }),
            className
          )}
          {...restProps}
        >
          {children}
          <Dialog.Close
            asChild
            //  className={cn(
            //   'text-dark dark:text-light absolute top-5 right-6 cursor-pointer p-1'
            // )}
            className={Styled.Close()}
            onClick={() => onClose?.()}
            role="button"
            // className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
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
    <Dialog.Description
      className={classNames(
        addClasseNamePrefix("modal-body"),
        Styled.Body({ css }),
        className
      )}
    >
      {children}
    </Dialog.Description>
  );
};

export function Footer({
  children,
  className,
  css,
  ...rest
}: ModalFooterProps) {
  return (
    <div
      // className={cn('flex items-center justify-end', 'w-full px-6 pb-6 gap-2', className)}
      className={classNames(
        addClasseNamePrefix("modal-footer"),
        Styled.Footer({ css }),
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
