import { breakpoints } from "../../../../styles/breackpoints";
import { css } from "../../../../styles/theme";

export type AvaliablesColSpans =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12;

export type AvaliablesColSpan = {
  [Property in keyof typeof breakpoints]?: number;
};

export interface ColContainerProps {
  span?: AvaliablesColSpan;
}

export const Grid = css("div", {
  display: "grid",
});

export const Col = css("div", {});
