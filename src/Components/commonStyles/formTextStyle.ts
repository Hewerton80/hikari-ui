import { rgba } from "polished";
import { colors } from "../../styles/colors";

import { CSS, darkTheme } from "../../styles/theme";
import { spaces } from "../../styles/spaces";

export const formTextStyle: CSS = {
  height: spaces["11.5"],
  minHeight: spaces["11.5"],
  maxHeight: spaces["11.5"],
  px: spaces["5.5"],
  py: spaces["3.5"],
  text: "sm",
  borderRadius: spaces["0.5"],
  outline: "none",
  backgroundColor: colors.white,
  transition: "all ease 0.3s",
  color: colors.dark,
  border: `${spaces["0.25"]} solid ${colors["gray-border"]}`,
  "&:not(:disabled):focus": {
    ring: colors.info,
    borderColor: colors.info,
  },
  [`.${darkTheme} &`]: {
    color: colors.light,
    borderColor: rgba(colors.white, 0.1),
    backgroundColor: colors["dark-body"],
  },
};
