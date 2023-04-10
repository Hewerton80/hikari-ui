import { CSS } from "../styles/theme";

export interface GlobalProps {
  id?: string;
  className?: string;
  children?: React.ReactNode;
  css?: CSS;
}
