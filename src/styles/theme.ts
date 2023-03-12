import { createStitches, ScaleValue } from "@stitches/core";

import { rem } from "polished";
import { colors } from "./colors";

const spaces = {
  0: 0,
  0.5: rem(2),
  1: rem(4),
  1.5: rem(6),
  2: rem(8),
  2.5: rem(10),
  3: rem(12),
  3.5: rem(14),
  4: rem(16),
  5: rem(20),
  6: rem(24),
  7: rem(28),
  8: rem(32),
  9: rem(36),
  10: rem(40),
  11: rem(44),
  12: rem(48),
  14: rem(56),
  16: rem(64),
  20: rem(80),
  24: rem(96),
  28: rem(112),
  32: rem(128),
  36: rem(144),
  40: rem(160),
  44: rem(176),
  48: rem(192),
  52: rem(208),
  56: rem(224),
  60: rem(240),
  64: rem(256),
  72: rem(288),
  80: rem(320),
  96: rem(384),
};

// @ts-ignore
export const { css } = createStitches({
  theme: {
    colors,
    fontSizes: {
      xs: rem(12),
      sm: rem(14),
      base: rem(16),
      lg: rem(18),
      xl: rem(20),
    },
    space: spaces,
    borderStyles: spaces,
    borderWidths: spaces,
    radii: spaces,
    sizes: spaces,
  },
  utils: {
    // Abbreviated margin properties
    m: (value: string) => ({
      margin: value,
    }),
    mt: (value: string) => ({
      marginTop: value,
    }),
    mr: (value: string) => ({
      marginRight: value,
    }),
    mb: (value: string) => ({
      marginBottom: value,
    }),
    ml: (value: string) => ({
      marginLeft: value,
    }),
    mx: (value: string) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: string) => ({
      marginTop: value,
      marginBottom: value,
    }),
    // Abbreviated padding properties
    p: (value: string) => ({
      padding: value,
    }),
    pt: (value: string) => ({
      paddingTop: value,
    }),
    pr: (value: string) => ({
      paddingRight: value,
    }),
    pb: (value: string) => ({
      paddingBottom: value,
    }),
    pl: (value: string) => ({
      paddingLeft: value,
    }),
    px: (value: string) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: string) => ({
      paddingTop: value,
      paddingBottom: value,
    }),

    // A property for applying width/height together
    size: (value: string) => ({
      width: value,
      height: value,
    }),
  },
});
