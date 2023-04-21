import { css, darkTheme } from "../../../../styles/theme";
import { spaces } from "../../../../styles/spaces";
import { colors } from "../../../../styles/colors";

export const Table = css("table", {
  width: "100%",
  text: "sm",
  borderCollapse: "collapse",
  "th, td": {
    py: spaces["5"],
    px: spaces["4"],
  },
});

export const TableContainer = css("div", {
  display: "flex",
  width: "100%",
  overflowX: "auto",
});

export const TableHead = css("thead", {});

export const TableRoll = css("tr", {});

export const TableHeadCell = css("th", {
  verticalAlign: "top",
  textAlign: "left",
  fontWeight: 500,
});

export const TableBody = css("tbody", {
  "tr:nth-of-type(odd)": {
    backgroundColor: colors["gray-lighter"],
    [`.${darkTheme} &`]: {
      backgroundColor: colors["dark-hover"],
    },
  },
});

export const TableDate = css("td", {});
