import classNames from "classnames";
import React, { useMemo, useCallback } from "react";
import { addClasseNamePrefix } from "../../../../utils/addClasseNamePrefix";
import { isNumber } from "../../../../utils/isType";
import * as Styled from "./Grid.styles";
import { GlobalProps } from "../../../../types/GlobalProps";
import { CSS } from "../../../../styles/theme";

export interface GridProps extends GlobalProps {
  numCols?: Styled.AvaliablesColSpans;
  gap?: number;
  columnGap?: number;
  rowGap?: number;
}
export interface ColProps extends GlobalProps {
  span?: Styled.AvaliablesColSpan;
}

function Grid({
  children,
  numCols = 12,
  gap,
  rowGap,
  columnGap,
  className,
  css,
  ...restProps
}: GridProps) {
  const cssGrid = useMemo(() => {
    const cssGrid: CSS = {};
    if (isNumber(gap)) {
      cssGrid.gap = gap;
      return cssGrid;
    }
    if (isNumber(rowGap)) {
      cssGrid.rowGap = rowGap;
    }
    if (isNumber(columnGap)) {
      cssGrid.columnGap = columnGap;
    }
    return cssGrid;
  }, [rowGap, columnGap, gap]);
  return (
    <div
      className={classNames(
        addClasseNamePrefix("grid"),
        Styled.Grid({
          css: {
            gridTemplateColumns: `repeat(${numCols}, minmax(0, 1fr));`,
            ...cssGrid,
            ...css,
          },
        }),
        className
      )}
      {...restProps}
    >
      {children}
    </div>
  );
}

function Col({ children, className, css, span, ...restProps }: ColProps) {
  const getColMediaScreenCss = useCallback((spanValue: number) => {
    return {
      gridColumn: `span ${spanValue} / span ${spanValue}`,
    };
  }, []);

  return (
    <div
      className={classNames(
        addClasseNamePrefix("col"),
        Styled.Col({
          css: {
            "@bpBase": span?.base ? getColMediaScreenCss(span.base) : {},
            "@bpSm": span?.sm ? getColMediaScreenCss(span.sm) : {},
            "@bpMd": span?.md ? getColMediaScreenCss(span.md) : {},
            "@bpLg": span?.lg ? getColMediaScreenCss(span.lg) : {},
            "@bpXl": span?.xl ? getColMediaScreenCss(span.xl) : {},
            "@bp2xl": span?.["2xl"] ? getColMediaScreenCss(span["2xl"]) : {},
            ...css,
          },
        }),
        className
      )}
      {...restProps}
    >
      {children}
    </div>
  );
}

Grid.Col = Col;

export { Grid };
