import React, { useCallback } from "react";
import {
  AlertModal,
  AlertModalProps,
  Variant,
} from "../Components/overlay/AlertModal";

interface AlertArgs
  extends Omit<
    AlertModalProps,
    "id" | "children" | "className" | "css" | "show"
  > {}
interface IAlertContext {
  alert: (alertModalProps?: AlertArgs) => void;
  closeAlert?: () => void;
}

const alertInitialValues: AlertModalProps = {
  show: false,
  title: "",
  description: "",
  icon: "info",
  variant: "info",
  isSubmiting: false,
  confirmButtonText: "Ok",
  cancelButtonText: "Cancel",
  showCancelButton: false,
  hideIcon: false,
};

export const AlertContext = React.createContext({} as IAlertContext);

interface IAlertContextProps {
  children: React.ReactNode;
}

export function AlertContextProvider({ children }: IAlertContextProps) {
  // show,
  // children,
  // title,
  // description,
  // icon,
  // variant = "info",
  // isSubmiting,
  // confirmButtonText = "Ok",
  // cancelButtonText = "Cancel",
  // showCancelButton,
  // css,
  // onClose,
  // onClickConfirmButton,
  // onClickCancelButton,
  const [show, setShow] = React.useState(alertInitialValues.show);
  const [title, setTitle] = React.useState(alertInitialValues.title);
  const [description, setDescription] = React.useState<string | JSX.Element>(
    alertInitialValues.description
  );
  const [icon, setIcon] = React.useState<Variant>(alertInitialValues.icon);
  const [variant, setVariant] = React.useState<Variant>(
    alertInitialValues.variant
  );
  const [isSubmiting, setIsSubmiting] = React.useState(
    alertInitialValues.isSubmiting
  );
  const [confirmButtonText, setButtonText] = React.useState(
    alertInitialValues.confirmButtonText
  );
  const [cancelButtonText, setCancelButtonText] = React.useState(
    alertInitialValues.cancelButtonText
  );
  const [showCancelButton, setShowCancelButton] = React.useState(
    alertInitialValues.showCancelButton
  );
  const [hideIcon, setHideIcon] = React.useState(alertInitialValues.hideIcon);

  const alert = useCallback((alertModalProps?: AlertArgs) => {
    setShow(true);
    if (alertModalProps?.title) {
      setTitle(alertModalProps?.title);
    }
    if (alertModalProps?.description) {
      setDescription(alertModalProps?.description);
    }
    if (alertModalProps?.icon) {
      setIcon(alertModalProps?.icon);
    }
    if (alertModalProps?.variant) {
      setVariant(alertModalProps?.variant);
    }
    if (alertModalProps?.isSubmiting) {
      setIsSubmiting(alertModalProps?.isSubmiting);
    }
    if (alertModalProps?.confirmButtonText) {
      setButtonText(alertModalProps?.confirmButtonText);
    }
    if (alertModalProps?.cancelButtonText) {
      setCancelButtonText(alertModalProps?.cancelButtonText);
    }
    if (alertModalProps?.showCancelButton) {
      setShowCancelButton(alertModalProps?.showCancelButton);
    }
    if (alertModalProps?.hideIcon) {
      setHideIcon(alertModalProps?.hideIcon);
    }
  }, []);

  const closeAlert = useCallback(() => {
    setShow(false);
    setTitle(alertInitialValues.title);
    setDescription(alertInitialValues.description);
    setIcon(alertInitialValues.icon);
    setVariant(alertInitialValues.variant);
    setIsSubmiting(alertInitialValues.isSubmiting);
    setButtonText(alertInitialValues.confirmButtonText);
    setCancelButtonText(alertInitialValues.cancelButtonText);
    setShowCancelButton(alertInitialValues.showCancelButton);
    setHideIcon(alertInitialValues.hideIcon);
  }, []);

  return (
    <AlertContext.Provider value={{ alert, closeAlert }}>
      {children}
      <AlertModal
        show={show}
        showCancelButton
        // onClose={onClose}
        // onClickConfirmButton={handleSubmit}
        // onClickCancelButton={handleCloseModal}
        isSubmiting={isSubmiting}
        icon={icon}
        title={title}
        variant={variant}
        cancelButtonText={cancelButtonText}
        confirmButtonText={confirmButtonText}
        description={description}
      />
    </AlertContext.Provider>
  );
}
