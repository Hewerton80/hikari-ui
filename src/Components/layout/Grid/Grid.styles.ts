import { rem } from "polished";
import styled, { css } from "styled-components";
import { isNumber } from "../../../utils/isType";
import { breakpoints } from "../../../styles/breackpoints";

type AvaliablesColSpans = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export interface GridContainerProps {
  numCols?: AvaliablesColSpans;
  columnGap?: number;
  rowGap?: number;
}

type AvaliablesColSpan = {
  [Property in keyof typeof breakpoints]?: number;
};

export interface ColContainerProps {
  span?: AvaliablesColSpan;
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

const getMediaScreenCss = (span: number, breakpoint: number) => css`
  @media screen and (min-width: ${breakpoint}px) {
    grid-column: span ${span} / span ${span};
  }
`;

export const ColContainer = styled.div<ColContainerProps>`
  ${({ span }) =>
    span &&
    css`
      ${isNumber(span?.base) &&
      css`
        ${getMediaScreenCss(span.base, breakpoints.base)}
      `}

      ${isNumber(span?.sm) &&
      css`
        ${getMediaScreenCss(span.sm, breakpoints.sm)}
      `}

    ${isNumber(span?.md) &&
      css`
        ${getMediaScreenCss(span.md, breakpoints.md)}
      `}

    ${isNumber(span?.lg) &&
      css`
        ${getMediaScreenCss(span.lg, breakpoints.lg)}
      `}

    ${isNumber(span?.xl) &&
      css`
        ${getMediaScreenCss(span.xl, breakpoints.xl)}
      `}

    ${isNumber(span?.["2xl"]) &&
      css`
        ${getMediaScreenCss(span["2xl"], breakpoints["2xl"])}
      `}
    `}
`;
