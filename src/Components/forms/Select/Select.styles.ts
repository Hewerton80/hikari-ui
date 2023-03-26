import { formTextStyle } from "../../commonStyles/formTextStyle";
import { css, darkTheme } from "../../../styles/theme";

export const Select = css("select", {
  ...formTextStyle,
  py: 0,
  cursor: "pointer",
  [`.${darkTheme} & > option`]: {
    color: "$light",
    backgroundColor: "$dark-card",
  },
});
