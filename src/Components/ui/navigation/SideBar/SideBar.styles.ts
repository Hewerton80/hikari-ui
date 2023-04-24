import { css, darkTheme, keyframes } from "../../../../styles/theme";
import { spaces } from "../../../../styles/spaces";
import { colors } from "../../../../styles/colors";
import { cardStyle } from "../../../commonStyles/CardStyle";
import { addClasseNamePrefix } from "../../../../utils/addClasseNamePrefix";

// className={cn(
//     'flex items-start md:items-center overflow-hidden',
//     'fixed md:static z-20',
//     '-translate-x-60 translate-y-[-35px] md:translate-x-0 md:translate-y-0',
//     'pt-8 pb-14 !w-60 h-max-[100vh] md:ml-2 !h-[calc(100vh-80px)] md:!h-auto',
//     'ease-linear duration-300 !transition-[width translate]',
//     !menuIsExpanded ? 'md:!w-[68px]' : 'md:!px-5',
//     showSideBar && 'translate-x-0',
//     className
//   )}

export const SideBar = css("div", {
  ...cardStyle,
  alignItems: "flex-start",
  paddingTop: spaces["8"],
  paddingBottom: spaces["14"],

  height: "100vh",
  transition: "width 300ms ease 0s",
  overflow: "hidden",
  color: colors.black,
  backgroundColor: colors.white,
  borderColor: colors["gray-lightest"],
  px: spaces["5"],
  [`.${darkTheme} &`]: {
    color: colors.white,
    background: colors["dark-card"],
    borderColor: colors["dark-card"],
  },
  //   backgroundColor: "red",
  "@bpMd": {
    // alignItems: "center",
    // height: "auto",
    // px: spaces["5"],
  },
  '&[data-state="collapsed"]': {
    [`.${addClasseNamePrefix("side-bar-link")}`]: {
      justifyContent: "center",
      "& > p": {
        display: "none",
      },
    },
    width: spaces["17"],
    // "@bpMd": {
    // },
  },
  '&[data-state="expanded"]': {
    width: spaces["60"],
    // "@bpMd": {
    //   px: spaces["5"],
    // },
  },
});

export const SideBarMenu = css("ul", {
  display: "flex",
  flexDirection: "column",
  width: "100%",
});

// relative flex flex-col w-full group
export const SideBarItem = css("li", {
  position: "relative",
  display: "flex",
  flexDirection: "column",
  width: "100%",
  svg: {
    text: "xl",
  },
});
export const SideBarLink = css("a", {
  display: "flex",
  justifyContent: "start",
  alignItems: "center",
  text: "sm",
  size: "100%",
  py: spaces["3.5"],
  paddingRight: spaces["3.5"],
  paddingLeft: spaces["2.5"],
  cursor: "pointer",
  color: colors.secondary,
  backgroundColor: colors.white,
  "&:hover": {
    backgroundColor: colors["gray-lighter"],
  },
  [`.${darkTheme} &`]: {
    background: colors["dark-card"],
    color: colors.light,
    "&:hover": {
      backgroundColor: colors["dark-hover"],
    },
  },
});

const slideDown = keyframes({
  from: { height: 0 },
  to: { height: "var(--radix-accordion-content-height)" },
});

const slideUp = keyframes({
  from: { height: "var(--radix-accordion-content-height)" },
  to: { height: 0 },
});

export const SideBarSubMenu = css("div", {
  overflowY: "hidden",
  '&[data-state="open"]': {
    animation: `${slideDown} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
  },
  '&[data-state="closed"]': {
    animation: `${slideUp} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
  },
});
// 'relative flex items-center w-full h-full justify-start',
// 'hover:bg-gray-lighter dark:hover:bg-dark-hover',
// router.pathname === url && 'bg-gray-lighter dark:bg-dark-hover',
// menuIsExpanded ? 'md:justify-start' : 'md:justify-center',
// 'py-3.5 pr-3.5 pl-[9.6px]',
// 'text-secondary dark:text-light text-sm'
