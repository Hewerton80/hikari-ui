import { css } from "../../../styles/theme";
const size = {
  sm: { size: "$8", svg: { text: "base" } },
  md: { size: "$11", svg: { text: "lg" } },
  lg: { size: "$12", svg: { text: "xl" } },
};

export const IconButton = css("button", {
  borderRadius: "100% !important",
  padding: "0px !important",
  variants: { size },
});

export interface IconButtonProps {
  size?: keyof typeof size;
}
