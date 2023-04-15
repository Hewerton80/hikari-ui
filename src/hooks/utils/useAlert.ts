import { useContext } from "react";
import { AlertContext, IAlertContext } from "../../context/AlertContext";

export function useAlert(): IAlertContext {
  return useContext(AlertContext);
}
