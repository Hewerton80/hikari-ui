import { css, darkTheme } from "../../../../styles/theme";
import { colors } from "../../../../styles/colors";
import { spaces } from "../../../../styles/spaces";

export const Tabs = css("div", {
  display: "flex",
  marginBottom: spaces["1"],
  borderBottom: `${spaces["0.25"]} solid ${colors.light}`,
});

export const Tab = css("div", {
  // flex basis-0 grow', 'cursor-pointer'
  // 'flex justify-center items-center relative',
  // 'py-2 px-4 text-sm ease-out duration-75',
  // 'text-center w-full h-full',
  // 'after:content-[""] after:absolute after:bottom-[-1px]',
  // 'after:h-[1px] after:bg-primary after:ease-out after:duration-75',
  // isActive ? 'text-primary after:w-full' : 'text-dark dark:text-light after:w-0'
  flexGrow: 1,
  position: "relative",
  padding: `${spaces["2"]} ${spaces["4"]}`,
  text: "sm",
  transition: "all ease 75ms",
  textAlign: "center",
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexBasis: 0,
  cursor: "pointer",
  border: "none",
  color: colors.dark,
  backgroundColor: colors.transparent,
  [`.${darkTheme} &`]: {
    color: colors.light,
  },
  "&::after": {
    content: "",
    position: "absolute",
    height: spaces["0.25"],
    bottom: `-${spaces["0.25"]}`,
    transition: "all ease 0.3s",
    width: 0,
    backgroundColor: colors.primary,
  },
  '&[data-state="active"]': {
    color: colors.primary,
    "&::after": {
      width: "100%",
    },
    [`.${darkTheme} &`]: {
      color: colors.primary,
    },
  },
});
export const TabContent = css("div", {
  width: "100%",
  height: "100%",
});
