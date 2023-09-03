import { rgba } from "polished";
import { colors } from "../../styles/colors";

import { CSS, darkTheme } from "../../styles/theme";
import { spaces } from "../../styles/spaces";
import { twMerge } from "tailwind-merge";

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

export const formTextClassName = twMerge(
  "h-[2.875rem] min-h-[2.875rem] max-h-[2.875rem] px-[1.375rem] py-3.5",
  "text-sm rounded-[.25rem] outline-none duration-300 ease-linear",
  "border border-slate-200 bg-white text-slate-800",
  "[&:not(:disabled)]:focus:ring-blue-500/40 [&:not(:disabled)]:focus:ring-4",
  "[&:not(:disabled)]:focus:border-blue-500",
  "dark:text-gray-200 dark:bg-gray-800 dark:border-white/10"
);
