import React from "react";

declare global {
  interface GlobalProps {
    id?: string;
    className?: string;
    children?: React.ReactNode;
    style?: React.CSSProperties;
  }

  type VariantStyle =
    | "primary"
    | "secondary"
    | "success"
    | "info"
    | "dark"
    | "danger"
    | "warning";
}
