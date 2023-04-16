import { css, CSS, darkTheme } from "../../../../styles/theme";
import { colors } from "../../../../styles/colors";
import { spaces } from "../../../../styles/spaces";
import { darken, rem } from "polished";

const textStyle: CSS = {
  color: colors.dark,
  "&:hover:not(&--selected)": {
    backgroundColor: `${colors["gray-light"]} !important`,
  },
  [`.${darkTheme} &`]: {
    color: `${colors.light} !important`,
    "&:hover": {
      backgroundColor: `${colors["dark-hover"]} !important`,
    },
  },
  "&--selected": {
    color: `${colors.white} !important`,
    backgroundColor: `${colors.info} !important`,
  },
};

export const DatePickerPopper = css("div", {
  ".react-datepicker": {
    display: "flex",
    border: "none",
    [`.${darkTheme} &`]: {
      backgroundColor: colors["dark-card"],
      borderColor: colors["dark-card"],
    },
    "&__header": {
      height: rem(110),
      backgroundColor: colors.info,
      border: `1px solid ${colors.info}`,
      paddingTop: spaces["7"],
      [`.${darkTheme} &`]: {
        backgroundColor: colors["dark-card"],
        borderColor: colors["dark-card"],
      },
    },
    "&-time__header": {
      color: colors.transparent,
      pointerEvents: "none",
    },
    "&__time": {
      borderLeft: `1px solid ${colors["gray-light"]}`,
      [`.${darkTheme} &`]: {
        backgroundColor: colors["dark-card"],
        borderColor: colors["dark-card"],
      },
      "&-container": {
        borderLeft: "none",
      },
      "&-list": {
        customScroll: "",
      },
      "&-list-item": {
        ...textStyle,
      },
    },
    "&__navigation": {
      top: spaces["6.5"],
      "&--previous": {
        left: spaces["4"],
      },
      "&--next": {
        right: spaces["4"],
      },
      "&-icon::before": {
        borderColor: colors.white,
      },
      "&:hover *::before": {
        borderColor: colors["gray-light"],
      },
    },
    "&__month": {
      margin: 0,
      padding: spaces["4"],
      borderTop: "none",
      border: "none",

      [`.${darkTheme} &`]: {
        backgroundColor: colors["dark-card"],
        borderColor: colors["dark-card"],
      },
    },
    "&__current-month": {
      marginBottom: spaces["1"],
      textTransform: "capitalize",
    },
    "&__current-month, &__day-name": {
      color: colors.white,
    },
    "&__day": {
      border: `1px solid ${colors.transparent}`,
      margin: spaces["0.5"],
      ...textStyle,
      "&--in-selecting-range": {
        backgroundColor: `${colors.info} !important`,
        color: colors.white,
      },
      "&--in-range": {
        backgroundColor: darken(0.1, colors.info),
        color: colors.white,
      },
      "&--outside-month": {
        color: colors.muted,
        [`.${darkTheme} &`]: {
          color: colors.muted,
        },
      },
      "&--disabled": {
        opacity: 0.5,
        cursor: "not-allowed",
      },
      "&--keyboard-selected": {
        backgroundColor: colors.transparent,
        borderColor: colors.info,
        color: colors.info,
      },
      "&-name": {
        margin: spaces["0.5"],
        fontWeight: "bold",
        textTransform: "capitalize",
      },
    },
    "&__portal": {
      backgroundColor: colors["dark-screen"],
    },
  },
});
