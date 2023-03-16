import React from "react";
import { CSS } from "../styles/theme";

declare global {
  interface GlobalProps {
    id?: string;
    className?: string;
    children?: React.ReactNode;
    css?: CSS;
  }
}
