import React, { useCallback } from "react";
import { AlertModal, AlertModalProps } from "../Components/overlay/AlertModal";

interface AlertArgs
  extends Omit<
    AlertModalProps,
    "id" | "children" | "className" | "css" | "show"
  > {}
export interface IAlertContext {
  alert: (alertModalProps?: AlertArgs) => void;
  closeAlert?: () => void;
}

const alertInitialValues: AlertArgs = {
  title: "",
  description: "",
  icon: "info",
  variant: "info",
  isSubmiting: false,
  confirmButtonText: "Ok",
  cancelButtonText: "Cancel",
  showCancelButton: false,
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
  const [show, setShow] = React.useState(false);
  const [alertModalValues, setAlertModalValues] =
    React.useState<AlertArgs>(alertInitialValues);

  const { onClose, onClickCancelButton, ...restAlertModalValues } =
    React.useMemo(() => alertModalValues, [alertModalValues]);

  const alert = useCallback((alertModalProps?: AlertArgs) => {
    setShow(true);
    setAlertModalValues(alertModalProps);
    // if (alertModalProps?.title) {
    //   setTitle(alertModalProps?.title);
    // }
    // if (alertModalProps?.description) {
    //   setDescription(alertModalProps?.description);
    // }
    // if (alertModalProps?.icon) {
    //   setIcon(alertModalProps?.icon);
    // }
    // if (alertModalProps?.variant) {
    //   setVariant(alertModalProps?.variant);
    // }
    // if (alertModalProps?.isSubmiting) {
    //   setIsSubmiting(alertModalProps?.isSubmiting);
    // }
    // if (alertModalProps?.confirmButtonText) {
    //   setButtonText(alertModalProps?.confirmButtonText);
    // }
    // if (alertModalProps?.cancelButtonText) {
    //   setCancelButtonText(alertModalProps?.cancelButtonText);
    // }
    // if (alertModalProps?.showCancelButton) {
    //   setShowCancelButton(alertModalProps?.showCancelButton);
    // }
    // if (alertModalProps?.hideIcon) {
    //   setHideIcon(alertModalProps?.hideIcon);
    // }
  }, []);

  const closeAlert = useCallback(() => {
    setShow(false);
    setAlertModalValues(alertInitialValues);
  }, []);

  const handleCloseAlert = useCallback(() => {
    closeAlert();
  }, [closeAlert]);

  return (
    <AlertContext.Provider value={{ alert, closeAlert }}>
      {children}
      <AlertModal
        show={show}
        onClose={() => {
          handleCloseAlert();
          onClose();
        }}
        onClickCancelButton={() => {
          handleCloseAlert();
          onClickCancelButton();
        }}
        {...restAlertModalValues}
      />
    </AlertContext.Provider>
  );
}
