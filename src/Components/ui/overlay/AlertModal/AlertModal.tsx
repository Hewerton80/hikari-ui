import React from "react";
import { Modal, ModalProps } from "../Modal";
import classNames from "classnames";
import * as Styled from "./AlertModal.styles";
import { Button } from "../../forms/Button";
import {
  IoAlertCircleOutline,
  IoCheckmarkCircleOutline,
  IoCloseCircleOutline,
  IoWarningOutline,
} from "react-icons/io5";
import { isString } from "../../../../utils/isType";

export type Variant = Styled.VariantsTypes;

type VariantsMap = {
  [Property in Variant]: { icon: JSX.Element };
};

const variants: VariantsMap = {
  success: {
    icon: <IoCheckmarkCircleOutline />,
  },
  info: {
    icon: <IoAlertCircleOutline />,
  },
  warning: {
    icon: <IoWarningOutline />,
  },
  danger: {
    icon: <IoCloseCircleOutline />,
  },
};

export interface AlertModalProps
  extends Omit<ModalProps, "size">,
    Styled.AlertModalProps {
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

const AlertModal = React.forwardRef(
  ({
    show,
    children,
    title,
    description,
    icon,
    variant = "info",
    isSubmiting,
    confirmButtonText = "Ok",
    cancelButtonText = "Cancel",
    showCancelButton,
    css,
    onClose,
    onClickConfirmButton,
    onClickCancelButton,
    ...restProps
  }: AlertModalProps) => {
    return (
      <Modal
        show={show}
        onClose={() => !isSubmiting && onClose?.()}
        size="md"
        css={{ ...css, ...Styled.alertCss }}
        {...restProps}
      >
        <Modal.Body>
          <div className={classNames(Styled.Content())}>
            {icon && (
              <span className={Styled.Icon({ variant })}>
                {variants[variant].icon}
              </span>
            )}

            {title && (
              <h4 className={classNames(Styled.Title({ variant }))}>{title}</h4>
            )}

            {isString(description) ? <p>{description}</p> : description}
          </div>
        </Modal.Body>
        <Modal.Footer position="center">
          {showCancelButton && (
            <Button
              variantStyle={`${variant}-outlined`}
              type="button"
              onClick={onClickCancelButton}
              disabled={isSubmiting}
            >
              {cancelButtonText}
            </Button>
          )}
          <Button
            variantStyle={variant}
            type="button"
            onClick={onClickConfirmButton}
            isLoading={isSubmiting}
          >
            {confirmButtonText}
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
);

export { AlertModal };
