import React, { ReactNode } from "react";
import { AlertContextProvider } from "./AlertContext";
import { ThemeContextProvider } from "./ThemeContext";

interface ProvidersProps {
  children: ReactNode;
}

export function HikariProviders({ children }: ProvidersProps) {
  return (
    <ThemeContextProvider>
      <AlertContextProvider>{children}</AlertContextProvider>
    </ThemeContextProvider>
  );
}
