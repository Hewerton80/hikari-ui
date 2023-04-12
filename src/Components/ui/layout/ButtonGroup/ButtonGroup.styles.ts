import { css, CSS } from "../../../../styles/theme";

const vertical: { true: CSS; false: CSS } = {
  true: {
    flexDirection: "column",
    button: {
      width: "100%",
    },
    "button:first-child": {
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
    },
    "button:last-child": {
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
    },
    "button + button": {
      borderTop: 0,
    },
  },
  false: {
    "button:first-child": {
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
    },
    "button:last-child": {
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
    },
    "button + button": {
      borderLeft: 0,
    },
  },
};

export const ButtonGroup = css("div", {
  display: "flex",
  "button:not(:first-child):not(:last-child)": {
    borderRadius: 0,
  },
  variants: { vertical },
});
