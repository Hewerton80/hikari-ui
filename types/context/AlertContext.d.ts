import React from "react";
import { AlertModalProps } from "../Components/overlay/AlertModal";
interface AlertArgs extends Omit<AlertModalProps, "id" | "children" | "className" | "css" | "show" | "isSubmiting"> {
}
export interface IAlertContext {
    showAlert: (alertModalProps?: AlertArgs) => void;
    closeAlert?: () => void;
}
export declare const AlertContext: React.Context<IAlertContext>;
interface IAlertContextProps {
    children: React.ReactNode;
}
export declare function AlertContextProvider({ children }: IAlertContextProps): JSX.Element;
export {};
