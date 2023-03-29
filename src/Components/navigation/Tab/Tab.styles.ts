import { css } from "../../../styles/theme";
import { colors } from "../../../styles/colors";
import { spaces } from "../../../styles/spaces";

// export const TabRoot = css("div", {
//   display: "flex",
//   flexDirection: "column",
// });

export const Tabs = css("div", {
  display: "flex",
  marginBottom: spaces["1"],
  borderBottom: `${spaces["0.25"]} solid ${colors.light}`,
});

export const Tab = css("div", {
  '&[data-state="active"]': {},
});
