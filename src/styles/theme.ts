import { createStitches, CSS as CSSStitches } from "@stitches/core";

import { colors } from "./colors";
import { spaces } from "./spaces";
import { fontSizes } from "./fontSizes";
import { lineHeights } from "./lineHeights";
import { shadows } from "./shadows";
import { breakpoints } from "./breackpoints";
import { CLASSNAME_PREFIX } from "../utils/addClasseNamePrefix";
import { rgba } from "polished";

export const { css, globalCss, createTheme, config, keyframes } =
  createStitches({
    theme: {
      colors,
      fontSizes,
      lineHeights,
      space: spaces,
      borderStyles: spaces,
      borderWidths: spaces,
      radii: spaces,
      sizes: spaces,
    },
    media: {
      [`bpBase`]: `(min-width: ${breakpoints.base}px)`,
      [`bpSm`]: `(min-width: ${breakpoints.sm}px)`,
      [`bpMd`]: `(min-width: ${breakpoints.md}px)`,
      [`bpLg`]: `(min-width: ${breakpoints.lg}px)`,
      [`bpXl`]: `(min-width: ${breakpoints.xl}px)`,
      [`bp2xl`]: `(min-width: ${breakpoints["2xl"]}px)`,
    },
    utils: {
      text: (value: keyof typeof fontSizes) => ({
        fontSize: fontSizes[value],
        lineHeight: lineHeights[value],
      }),
      mx: (value: string | number) => ({
        marginLeft: value,
        marginRight: value,
      }),
      my: (value: string | number) => ({
        marginTop: value,
        marginBottom: value,
      }),
      px: (value: string | number) => ({
        paddingLeft: value,
        paddingRight: value,
      }),
      py: (value: string | number) => ({
        paddingTop: value,
        paddingBottom: value,
      }),
      size: (value: string | number) => ({
        width: value,
        height: value,
      }),
      ring: (color: string) => ({
        boxShadow: `0 0 0 3.2px ${rgba(color, 0.5)}`,
      }),
      shadow: (shadow: keyof typeof shadows) => ({
        boxShadow: shadows[shadow],
      }),
      positionCenter: (position: "fixed" | "absolute") => ({
        position: position,
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }),
      spaceY: (value: string | number) => ({
        "& > * + *": {
          marginTop: value,
        },
      }),
      spaceX: (value: string | number) => ({
        "& > * + *": {
          marginLeft: value,
        },
      }),
    },

    prefix: CLASSNAME_PREFIX,
  });

export type CSS = CSSStitches<typeof config>;

export const darkTheme = createTheme({});
export const lightTheme = createTheme({});
