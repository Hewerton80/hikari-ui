import React from "react";
import { ModalProps } from "../Modal";
import * as Styled from "./AlertModal.styles";
export type Variant = Styled.VariantsTypes;
export interface AlertModalProps extends Omit<ModalProps, "size">, Styled.AlertModalProps {
    title?: string;
    icon?: Styled.VariantsTypes;
    showCancelButton?: boolean;
    isSubmiting?: boolean;
    description?: string | JSX.Element;
    confirmButtonText?: string;
    cancelButtonText?: string;
    onClickConfirmButton?: () => void;
    onClickCancelButton?: () => void;
}
declare const AlertModal: React.ForwardRefExoticComponent<AlertModalProps & React.RefAttributes<unknown>>;
export { AlertModal };
