import React from "react";
import { AlertContextProvider } from "./AlertContext";

interface ProvidersProps {
  children: React.ReactNode;
}

export function HikariProviders({ children }: ProvidersProps) {
  return <AlertContextProvider>{children}</AlertContextProvider>;
}
