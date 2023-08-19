import React, {
  useCallback,
  ReactNode,
  createContext,
  useState,
  useMemo,
} from "react";
import { AlertModalProps } from "../Components/ui/overlay/AlertModal";

interface AlertArgs
  extends Omit<
    AlertModalProps,
    "id" | "children" | "className" | "css" | "show" | "isSubmiting"
  > {}
export interface IAlertContext {
  showAlert: (alertModalProps?: AlertArgs) => void;
  closeAlert?: () => void;
  alertArgs?: AlertModalProps;
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

export const AlertContext = createContext({} as IAlertContext);

interface IAlertContextProps {
  children: ReactNode;
}

export function AlertContextProvider({ children }: IAlertContextProps) {
  // show,
  const [isSubmiting, setIsSubmiting] = useState(false);
  const [show, setShow] = useState(false);
  const [alertModalValues, setAlertModalValues] =
    useState<AlertArgs>(alertInitialValues);

  const {
    onClose,
    onClickCancelButton,
    onClickConfirmButton,
    ...restAlertModalValues
  } = useMemo(() => alertModalValues, [alertModalValues]);

  const showAlert = useCallback((alertModalProps?: AlertArgs) => {
    setShow(true);
    setAlertModalValues(alertModalProps);
  }, []);

  const closeAlert = useCallback(() => {
    setShow(false);
    setIsSubmiting(false);
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
      setIsSubmiting(true);
    } else {
      handleCloseAlert();
    }
    onClickConfirmButton?.();
  }, [alertModalValues, onClickConfirmButton, handleCloseAlert]);

  return (
    <AlertContext.Provider
      value={{
        showAlert,
        closeAlert,
        alertArgs: {
          show,
          isSubmiting,
          onClose: handleCloseAlert,
          onClickCancelButton: handleClickCancelButton,
          onClickConfirmButton: handleClickConfirmButton,
          ...restAlertModalValues,
        },
      }}
    >
      {children}
    </AlertContext.Provider>
  );
}
