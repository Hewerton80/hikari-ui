import { colors } from "../../../styles/colors";
import { addClasseNamePrefix } from "../../../utils/addClasseNamePrefix";
import { css, CSS, darkTheme } from "../../../styles/theme";

const getStateVariantCss = (color: string): CSS => {
  if (!color) return {};

  return {
    [`.${addClasseNamePrefix("feedback")}`]: {
      text: "xs",
      marginTop: "$2",
      color,
    },
    [`
    .${addClasseNamePrefix("input")}, .${addClasseNamePrefix(
      "textarea"
    )}, .auto-complite__control`]: {
      borderColor: color,
      "&:not(:disabled):focus": {
        ring: color,
        borderColor: color,
      },
      "&--is-focused": {
        ring: color,
      },
      "&:hover": {
        borderColor: color,
      },
    },
  };
};

const state = {
  danger: getStateVariantCss(colors.danger),
  success: getStateVariantCss(colors.success),
  warning: getStateVariantCss(colors.warning),
};

export const FormControl = css("div", {
  position: "relative",
  display: "flex",
  flexDirection: "column",
  variants: {
    state,
  },
});

export interface FormControlProps {
  state?: keyof typeof state;
}

const required = {
  true: {
    "&::after": {
      content: "*",
      color: "$danger",
    },
  },
  false: {},
};

export const Label = css("label", {
  text: "sm",
  marginBottom: "$2",
  variants: { required },
  color: "$black",
  [`.${darkTheme} &`]: {
    color: "$light",
  },
});
