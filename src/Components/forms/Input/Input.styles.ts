import { formTextStyle } from "../../commonStyles/formTextStyle";
import { css } from "../../../styles/theme";
import { spaces } from "../../../styles/spaces";

export const Input = css("input", {
  height: spaces["11.5"],
  ...formTextStyle,
});
