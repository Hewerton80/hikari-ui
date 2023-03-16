import { rgba } from "polished";
import { colors } from "../../styles/colors";

import { CSS, darkTheme } from "../../styles/theme";
import { spaces } from "../../styles/spaces";

export const formTextStyle: CSS = {
  px: spaces["5.5"],
  py: spaces["3.5"],
  text: "sm",
  borderRadius: spaces["0.5"],
  outline: "none",
  backgroundColor: colors.transparent,
  transition: "all ease 0.3s",
  color: colors.dark,
  border: `${spaces["0.25"]} solid ${colors["gray-border"]}`,
  "&:not(:disabled):focus": {
    ring: colors.info,
  },
  [`.${darkTheme} &`]: {
    color: colors.light,
    borderColor: rgba(colors.white, 0.1),
  },
};
