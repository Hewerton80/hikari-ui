import React, { ReactNode } from "react";
import { AlertContextProvider } from "./AlertContext";

interface ProvidersProps {
  children: ReactNode;
}

export function HikariProviders({ children }: ProvidersProps) {
  return <AlertContextProvider>{children}</AlertContextProvider>;
}
