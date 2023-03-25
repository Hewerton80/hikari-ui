/// <reference types="react" />
import * as Styled from "./Grid.styles";
export interface GridProps extends GlobalProps {
    numCols?: Styled.AvaliablesColSpans;
    gap?: number;
    columnGap?: number;
    rowGap?: number;
}
export interface ColProps extends GlobalProps {
    span?: Styled.AvaliablesColSpan;
}
declare function Grid({ children, numCols, gap, rowGap, columnGap, className, css, ...restProps }: GridProps): JSX.Element;
declare namespace Grid {
    var Col: ({ children, className, css, span, ...restProps }: ColProps) => JSX.Element;
}
export { Grid };
