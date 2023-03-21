import React, { useCallback } from "react";
import { AlertModal, AlertModalProps } from "../Components/overlay/AlertModal";

interface AlertArgs
  extends Omit<
    AlertModalProps,
    "id" | "children" | "className" | "css" | "show" | "isSubmiting"
  > {}
export interface IAlertContext {
  showAlert: (alertModalProps?: AlertArgs) => void;
  closeAlert?: () => void;
  // changeLoadAlert?: (load: boolean) => void;
}

const alertInitialValues: AlertArgs = {
  title: "",
  description: "",
  icon: "info",
  variant: "info",
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
  const [loading, setLoading] = React.useState(false);
  const [show, setShow] = React.useState(false);
  const [alertModalValues, setAlertModalValues] =
    React.useState<AlertArgs>(alertInitialValues);

  const {
    onClose,
    onClickCancelButton,
    onClickConfirmButton,
    ...restAlertModalValues
  } = React.useMemo(() => alertModalValues, [alertModalValues]);

  const showAlert = useCallback((alertModalProps?: AlertArgs) => {
    setShow(true);
    setAlertModalValues(alertModalProps);
  }, []);

  // const changeLoadAlert = useCallback((load: boolean) => {
  //   setLoading(load);
  // }, []);

  const closeAlert = useCallback(() => {
    setShow(false);
    setLoading(false);
    setAlertModalValues(alertInitialValues);
  }, []);

  const handleCloseAlert = useCallback(() => {
    closeAlert();
    onClose?.();
  }, [closeAlert, onClose]);

  const handleClickCancelButton = useCallback(() => {
    handleCloseAlert();
    onClickCancelButton?.();
  }, [handleCloseAlert, onClickCancelButton]);

  const handleClickConfirmButton = useCallback(() => {
    if (alertModalValues?.showCancelButton) {
      setLoading(true);
    } else {
      handleCloseAlert();
    }
    onClickConfirmButton?.();
  }, [alertModalValues, onClickConfirmButton, handleCloseAlert]);

  return (
    <AlertContext.Provider value={{ showAlert, closeAlert }}>
      {children}
      <AlertModal
        show={show}
        isSubmiting={loading}
        onClose={handleCloseAlert}
        onClickCancelButton={handleClickCancelButton}
        onClickConfirmButton={handleClickConfirmButton}
        {...restAlertModalValues}
      />
    </AlertContext.Provider>
  );
}
