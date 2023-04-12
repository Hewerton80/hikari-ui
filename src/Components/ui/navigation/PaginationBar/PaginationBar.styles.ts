import { css } from "../../../../styles/theme";

export const PaginationBar = css("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  "& > span": {
    text: "sm",
  },
});
