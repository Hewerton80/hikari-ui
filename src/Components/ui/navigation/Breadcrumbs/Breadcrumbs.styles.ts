import { colors } from "../../../../styles/colors";
import { css, CSS, darkTheme } from "../../../../styles/theme";
// .root {
//     @apply flex;
//   }
//   .root > p {
//     @apply text-xs text-gray;
//   }
//   .root > p > a:not(.is_last_index) {
//     @apply pointer-events-auto hover:underline decoration-gray;
//   }
//   .root > p > a.is_last_index {
//     @apply pointer-events-none;
//   }
//   .root > p > span {
//     @apply mx-1.5;
//   }
export const Breadcrumbs = css("ul", {
  display: "flex",
});
export const Link = css("li", {
  text: "xs",
  "& + &": {
    "&::before": {
      content: "/",
      mx: "$2",
      pointerEvents: "none",
      textDecoration: "none",
      color: colors.gray,
    },
  },
  "&:not(:last-child) a": {
    color: colors.gray,
    "&:hover": {
      textDecoration: "underline",
    },
  },
  "&:last-child a": {
    color: colors.primary,
    pointerEvents: "none",
  },
});
