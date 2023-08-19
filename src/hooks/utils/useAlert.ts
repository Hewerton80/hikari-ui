import { useContext } from "react";
import { AlertContext, IAlertContext } from "../../context/AlertContext";

export function useAlert(): IAlertContext {
  const { showAlert, closeAlert } = useContext(AlertContext);
  return { showAlert, closeAlert };
}
