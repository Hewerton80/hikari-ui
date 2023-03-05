import styled, { css, keyframes } from "styled-components";
import { rem } from "polished";

export interface ContainerProps {
  size?: number;
  color?: string;
}

const ldsRing = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div<ContainerProps>`
  ${({ size, color }) => css`
    display: inline-block;
    position: relative;
    width: ${rem(size)};
    height: ${rem(size)};

    div {
      box-sizing: border-box;
      display: block;
      position: absolute;
      width: ${rem(0.8 * size)};
      height: ${rem(0.8 * size)};
      margin: ${rem(0.1 * size)};
      border: ${rem(0.1 * size)} solid ${color};
      border-radius: 50%;
      animation: ${ldsRing} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
      border-color: ${color} transparent transparent transparent;
    }
  `}
  div:nth-child(1) {
    animation-delay: -0.45s;
  }
  div:nth-child(2) {
    animation-delay: -0.3s;
  }
  div:nth-child(3) {
    animation-delay: -0.15s;
  }
`;
