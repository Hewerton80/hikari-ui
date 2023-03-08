import { rgba } from "polished";
import { css } from "styled-components";

export const ring = (color: string) => css`
  box-shadow: ${`0 0 0 3.2px ${rgba(color, 0.5)}`};
`;
