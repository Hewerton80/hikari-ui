import React from "react";
import { AlertContext, IAlertContext } from "../../context/AlertContext";

export function useAlert(): IAlertContext {
  return React.useContext(AlertContext);
}
