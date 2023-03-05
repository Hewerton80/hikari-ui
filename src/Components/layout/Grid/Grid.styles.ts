import { rem } from "polished";
import styled, { css } from "styled-components";
import { isNumber } from "../../../utils/isType";
type AvaliablesColSoans = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export interface GridContainerProps {
  numCols?: AvaliablesColSoans;
  columnGap?: number;
  rowGap?: number;
}

export const GridContainer = styled.div<GridContainerProps>`
  display: grid;
  ${({ numCols, columnGap, rowGap }) => {
    return css`
      ${isNumber(numCols) &&
      css`
        grid-template-columns: repeat(${numCols}, minmax(0, 1fr));
      `}
      ${isNumber(rowGap) &&
      css`
        row-gap: ${rem(rowGap)};
      `}
      ${isNumber(columnGap) &&
      css`
        column-gap: ${rem(columnGap)};
      `}
    `;
  }}
`;
export const ColContainer = styled.div``;
