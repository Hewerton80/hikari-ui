/// <reference types="react" />
import * as Styled from "./Modal.styles";
export interface ModalProps extends GlobalProps, Styled.ModalProps {
    show?: boolean;
    onClose?: () => void;
}
export interface ModalTitleProps extends GlobalProps {
}
export interface ModalBodyProps extends GlobalProps {
}
export interface ModalFooterProps extends GlobalProps, Styled.ModalFooterProps {
}
declare function Modal({ children, size, css, className, show, onClose, ...restProps }: ModalProps): JSX.Element;
declare namespace Modal {
    var Title: ({ children, className, css }: ModalTitleProps) => JSX.Element;
    var Body: ({ children, className, css }: ModalBodyProps) => JSX.Element;
    var Footer: ({ children, className, css, position, ...rest }: ModalFooterProps) => JSX.Element;
}
export { Modal };
