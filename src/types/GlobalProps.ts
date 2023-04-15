import { ReactNode } from "react";
import { CSS } from "../styles/theme";

export interface GlobalProps {
  id?: string;
  className?: string;
  children?: ReactNode;
  css?: CSS;
}
