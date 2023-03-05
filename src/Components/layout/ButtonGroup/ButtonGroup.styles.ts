import styled, { css } from "styled-components";

export interface ContainerProps {
  vertical?: boolean;
}
export const Container = styled.div<ContainerProps>`
  display: flex;
  button:not(:first-child):not(:last-child) {
    border-radius: 0;
    border-radius: 0;
  }
  ${({ vertical }) =>
    vertical
      ? css`
          flex-direction: column;
          button {
            width: 100%;
          }
          button:not(:first-child):not(:last-child) {
            border-radius: 0;
            border-radius: 0;
          }
          button:first-child {
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
          }
          button:last-child {
            border-top-left-radius: 0;
            border-top-right-radius: 0;
          }
          button + button {
            border-top: 0;
          }
        `
      : css`
          button:first-child {
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
          }
          button:last-child {
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
          }
          button + button {
            border-left: 0;
          }
        `}
`;
