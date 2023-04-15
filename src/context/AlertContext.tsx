import React, {
  useCallback,
  ReactNode,
  createContext,
  useState,
  useMemo,
} from "react";
import {
  AlertModal,
  AlertModalProps,
} from "../Components/ui/overlay/AlertModal";

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

export const AlertContext = createContext({} as IAlertContext);

interface IAlertContextProps {
  children: ReactNode;
}

export function AlertContextProvider({ children }: IAlertContextProps) {
  // show,
  const [loading, setLoading] = useState(false);
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
