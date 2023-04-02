import { css, darkTheme } from "../../../styles/theme";
import { colors } from "../../../styles/colors";
import { spaces } from "../../../styles/spaces";

export const DatePickerPopper = css("div", {
  ".react-datepicker": {
    border: "none",
    "&__header": {
      backgroundColor: colors.info,
      border: `1px solid ${colors.info}`,
      paddingTop: spaces["7"],
      [`.${darkTheme} &`]: {
        backgroundColor: colors["dark-card"],
        borderColor: colors["dark-card"],
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
      border: `1px solid ${colors["gray-lightest"]}`,
      margin: 0,
      padding: spaces["4"],
      borderTop: "none",
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
      color: colors.dark,
      border: `1px solid ${colors.transparent}`,
      margin: spaces["0.5"],
      "&:hover": {
        backgroundColor: colors["gray-light"],
      },
      [`.${darkTheme} &`]: {
        color: colors.light,
        "&:hover": {
          backgroundColor: colors["dark-hover"],
        },
      },
      "&--selected": {
        color: colors.white,
        backgroundColor: colors.info,
      },
      "&--outside-month": {
        color: colors.muted,
        [`.${darkTheme} &`]: {
          color: colors.muted,
        },
      },
      "&--keyboard-selected": {
        backgroundColor: colors.transparent,
        borderColor: colors.info,
      },
      "&-name": {
        margin: spaces["0.5"],
        fontWeight: "bold",
        textTransform: "capitalize",
      },
    },

    // "&__triangle": {
    //   "&::before": {
    //     borderBottomColor: `${colors.transparent} !important`,
    //   },
    //   "&::after": {
    //     borderBottomColor: `${colors.info} !important`,
    //     [`.${darkTheme} &`]: {
    //       borderBottomColor: `${colors["dark-card"]} !important`,
    //     },
    //   },
    // },
    "&__portal": {
      backgroundColor: colors["dark-screen"],
    },
  },
  // "&[data-placement^=top]": {
  //   ".react-datepicker": {
  //     "&__triangle": {
  //       "&::before": {
  //         borderTopColor: `${colors["gray-lightest"]} !important`,
  //         bottom: "0px !important",
  //         [`.${darkTheme} &`]: {
  //           borderTopColor: `${colors.transparent} !important`,
  //         },
  //       },
  //       "&::after": {
  //         bottom: "1px !important",
  //         [`.${darkTheme} &`]: {
  //           borderTopColor: `${colors["dark-card"]} !important`,
  //         },
  //       },
  //     },
  //   },
  // },
});
