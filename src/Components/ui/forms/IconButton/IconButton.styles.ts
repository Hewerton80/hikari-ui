import { spaces } from "../../../../styles/spaces";
import { css } from "../../../../styles/theme";
const size = {
  sm: { size: `${spaces["8"]} !important`, svg: { text: "base" } },
  md: { size: `${spaces["11"]} !important`, svg: { text: "lg" } },
  lg: { size: `${spaces["12"]} !important`, svg: { text: "xl" } },
};

export const IconButton = css("button", {
  borderRadius: "100% !important",
  padding: "0px !important",
  variants: { size },
});

export interface IconButtonProps {
  size?: keyof typeof size;
}
