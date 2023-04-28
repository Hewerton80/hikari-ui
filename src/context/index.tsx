import React, { ReactNode } from "react";
import { AlertContextProvider } from "./AlertContext";
import { globalStyles } from "../styles/globalStyles";

interface ProvidersProps {
  children: ReactNode;
}

export function HikariProviders({ children }: ProvidersProps) {
  globalStyles();
  return <AlertContextProvider>{children}</AlertContextProvider>;
}
