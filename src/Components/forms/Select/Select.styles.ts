import { css, darkTheme } from "../../../styles/theme";
import { colors } from "../../../styles/colors";
import { spaces } from "../../../styles/spaces";
import { darken, rem, rgba } from "polished";
import { formTextStyle } from "../../commonStyles/formTextStyle";

export const ReactSelect = css("div", {
  ".select": {
    "&__control": {
      minHeight: formTextStyle.height,
      backgroundColor: formTextStyle.backgroundColor,
      transition: formTextStyle.transition,
      borderColor: colors["gray-border"],
      "&:hover": {
        borderColor: colors["gray-border"],
      },
      [`.${darkTheme} &`]: {
        borderColor: rgba(colors["white"], 0.1),
      },
      "&--is-focused": {
        borderColor: colors["info"],
        ring: colors["info"],
        "&:hover": {
          borderColor: colors["info"],
        },
      },
    },
    "&__value-container": {
      px: spaces["2.5"],
    },
    "&__input-container": {
      margin: 0,
    },
    "&__placeholder": {
      margin: 0,
      text: "sm",
    },
    "&__single-value": {
      margin: 0,
      text: "sm",
      color: colors.input,
      [`.${darkTheme} &`]: {
        color: colors.light,
      },
    },
    "&__input": {
      text: "sm",
      color: colors.input,
      [`.${darkTheme} &`]: {
        color: `${colors.light} !important`,
      },
    },
    "&__menu": {
      border: `${rem(1)} solid ${colors["gray-lightest"]}`,
      shadow: "md",
      my: 0,
      [`.${darkTheme} &`]: {
        backgroundColor: colors["dark-card"],
        borderColor: rgba(colors["white"], 0.1),
      },
    },
    "&__option": {
      text: "sm",
      color: colors.dark,
      padding: spaces["1.5"],
      [`.${darkTheme} &`]: {
        color: colors.light,
      },
      "&--is-selected": {
        backgroundColor: colors.info,
        color: colors.light,
      },
      "&--is-focused": {
        backgroundColor: rgba(colors.info, 0.8),
        color: colors.light,
      },
    },
    "&__indicator-separator, &__loading-indicator": {
      display: "none",
    },
    "&__multi-value": {
      backgroundColor: colors.info,
      text: "sm",
      py: spaces["1.5"],
      px: spaces["2"],
      borderRadius: spaces["1"],
      "&__label": {
        color: colors.white,
        padding: 0,
      },
      "&__remove": {
        color: colors.white,
        marginLeft: spaces["0.5"],
        "&:hover": {
          backgroundColor: darken(0.1, colors.info),
          color: colors.white,
          cursor: "pointer",
        },
      },
    },
  },
});
