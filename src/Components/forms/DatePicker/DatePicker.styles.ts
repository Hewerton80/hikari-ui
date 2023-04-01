import { css } from "../../../styles/theme";
import { colors } from "../../../styles/colors";
import { spaces } from "../../../styles/spaces";
// import { formTextStyle } from "../../commonStyles/formTextStyle";

// export const DatePicker = css("input", {
//     ...formTextStyle,
// });
export const DatePickerPopper = css("div", {
  ".react-datepicker": {
    border: "none",
    "&__header": {
      backgroundColor: colors.info,
      border: `1px solid ${colors.info}`,
    },
    "&__month": {
      border: `1px solid ${colors["gray-lightest"]}`,
      margin: 0,
      padding: spaces["1.5"],
      borderTop: "none",
    },
    "&__current-month, &__day-name": {
      color: colors.white,
    },
    "&__day": {
      color: colors.dark,
      border: `1px solid ${colors.transparent}`,
      "&--selected": {
        color: colors.white,
        backgroundColor: colors.info,
      },
      "&--outside-month": {
        color: colors.muted,
      },
      "&--keyboard-selected": {
        backgroundColor: colors.transparent,
        borderColor: colors.info,
      },
    },
  },
  "&[data-placement^=bottom]": {
    ".react-datepicker": {
      "&__triangle::after": {
        borderBottomColor: `${colors.info} !important`,
      },
    },
  },
});
