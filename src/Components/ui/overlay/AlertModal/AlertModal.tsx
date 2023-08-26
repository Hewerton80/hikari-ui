import React, { forwardRef, useContext } from "react";
import { Modal, ModalProps } from "../Modal";
import { twMerge } from "tailwind-merge";
import { Button } from "../../forms/Button";
import { isString } from "../../../../utils/isType";
import { AlertContext } from "../../../../context/AlertContext";
import {
  CheckCircledIcon,
  ExclamationTriangleIcon,
  InfoCircledIcon,
  CrossCircledIcon,
} from "@radix-ui/react-icons";
import { Slot } from "@radix-ui/react-slot";

// type VariantsMap = {
//   [Property in Variant]: { icon: JSX.Element };
// };

const variants = {
  success: {
    icon: <CheckCircledIcon />,
    color: "text-green-500",
  },
  info: {
    icon: <InfoCircledIcon />,
    color: "text-blue-500",
  },
  warning: {
    icon: <ExclamationTriangleIcon />,
    color: "text-yellow-500",
  },
  danger: {
    icon: <CrossCircledIcon />,
    color: "text-red-500",
  },
};

type VariantType = keyof typeof variants;

export interface AlertModalProps extends Omit<ModalProps, "size" | "children"> {
  title?: string;
  variant?: VariantType;
  icon?: VariantType;
  showCancelButton?: boolean;
  isSubmiting?: boolean;
  description?: string | JSX.Element;
  confirmButtonText?: string;
  cancelButtonText?: string;
  onClickConfirmButton?: () => void;
  onClickCancelButton?: () => void;
}

const AlertModal = forwardRef(() => {
  const {
    alertArgs: {
      show,
      title,
      description,
      icon,
      variant = "info",
      isSubmiting,
      confirmButtonText = "Ok",
      cancelButtonText = "Cancel",
      showCancelButton,
      onClose,
      onClickConfirmButton,
      onClickCancelButton,
      ...restProps
    },
  } = useContext(AlertContext);

  return (
    <Modal
      show={show}
      onClose={() => !isSubmiting && onClose?.()}
      size="md"
      {...restProps}
    >
      <Modal.Body>
        <div className="flex flex-col items-center space-y-3">
          {icon && (
            <span className="flex">
              <Slot
                className={twMerge(
                  "h-[4.5rem] w-[4.5rem] animate-rotate-y",
                  variants[variant].color
                )}
              >
                {variants[variant].icon}
              </Slot>
            </span>
          )}

          {title && (
            <h4
              className={twMerge(
                "text-lg text-center",
                variants[variant].color
              )}
            >
              {title}
            </h4>
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
});

export { AlertModal };
