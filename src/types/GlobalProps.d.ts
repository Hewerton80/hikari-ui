import React from "react";

declare global {
  interface GlobalProps {
    id?: string;
    className?: string;
    children?: React.ReactNode;
    style?: React.CSSProperties;
  }
}
