import { rgba, darken } from "polished";
import { toRem } from "../../utils/toRem";
import { colors } from "../../theme/colors";
import styled, { css } from "styled-components";

const buttonVariants = {
  primary: {
    // root: "border-primary",
    // hover: "hover:bg-active-primary hover:shadow-sm hover:shadow-primary",
    // active:
    //   "active:bg-active-primary focus:ring-primary/40 active:ring-primary/40",
    // contained: "bg-primary text-white",
    // outline: "bg-transparent text-primary hover:bg-primary hover:text-white",
    // texted: "bg-transparent text-primary",
    contained: {
      bgColor: colors.primary,
      hoverBgColor: darken(0.1, colors.primary),
      borderColor: colors.primary,
      color: colors.white,
      hoverColor: colors.white,
      spinnerColor: colors.white,
      shadowColor: colors.primary,
    },
    outlined: {
      bgColor: colors.transparent,
      hoverBgColor: darken(0.1, colors.primary),
      borderColor: colors.primary,
      color: colors.primary,
      hoverColor: colors.white,
      spinnerColor: colors.primary,
      shadowColor: colors.primary,
    },
    texted: {
      bgColor: colors.primary,
      hoverBgColor: darken(0.1, colors.primary),
      borderColor: colors.primary,
      color: colors.white,
      hoverColor: colors.white,
      spinnerColor: colors.white,
      shadowColor: colors.primary,
    },
    // shadow: colors.shadow
  },
  //   tes: {},
  //   secondary: {
  //     root: "border-secondary",
  //     hover: "hover:bg-active-secondary hover:shadow-sm hover:shadow-secondary",
  //     active:
  //       "active:bg-active-secondary focus:ring-secondary/40 active:ring-secondary/40",
  //     contained: "bg-secondary text-white",
  //     outline:
  //       "bg-transparent text-secondary hover:bg-secondary hover:text-white",
  //     texted: "bg-transparent text-secondary",
  //   },
  //   success: {
  //     root: "border-success",
  //     hover: "hover:bg-active-success hover:shadow-sm hover:shadow-success",
  //     active:
  //       "active:bg-active-success focus:ring-success/40 active:ring-success/40",
  //     contained: "bg-success text-white",
  //     outline: "bg-transparent text-success hover:bg-success hover:text-white",
  //     texted: "bg-transparent text-success",
  //   },
  //   info: {
  //     root: "border-info",
  //     hover: "hover:bg-active-info hover:shadow-sm hover:shadow-info",
  //     active: "active:bg-active-info focus:ring-info/40 active:ring-info/40",
  //     contained: "bg-info text-white",
  //     outline: "bg-transparent text-info hover:bg-info hover:text-white",
  //     texted: "bg-transparent text-info",
  //   },
  //   dark: {
  //     root: "border-dark",
  //     hover: "hover:bg-active-dark hover:shadow-sm hover:shadow-dark",
  //     active: "active:bg-active-dark focus:ring-dark/40 active:ring-dark/40",
  //     contained: "bg-dark text-white",
  //     outline: "bg-transparent text-dark hover:bg-dark hover:text-white",
  //     texted: "bg-transparent text-dark",
  //   },
  //   light: {
  //     root: "border-light",
  //     hover: "hover:bg-active-light hover:shadow-sm hover:shadow-light",
  //     active: "active:bg-active-light focus:ring-light/40 active:ring-light/40",
  //     contained: "bg-light text-dark",
  //     outline: "bg-transparent text-light hover:bg-light hover:text-white",
  //     texted: "bg-transparent text-light",
  //   },
  //   danger: {
  //     root: "border-danger",
  //     hover: "hover:bg-active-danger hover:shadow-sm hover:shadow-danger",
  //     active:
  //       "active:bg-active-danger focus:ring-danger/40 active:ring-danger/40",
  //     contained: "bg-danger text-white",
  //     outline: "bg-transparent text-danger hover:bg-danger hover:text-white",
  //     texted: "bg-transparent text-danger",
  //   },
  //   warning: {
  //     root: "border-warning",
  //     hover: "hover:bg-active-warning hover:shadow-sm hover:shadow-warning",
  //     active:
  //       "active:bg-active-warning focus:ring-warning/40 active:ring-warning/40",
  //     contained: "bg-warning text-white",
  //     outline: "bg-transparent text-warning hover:bg-warning hover:text-white",
  //     texted: "bg-transparent text-warning",
  //   },
};

const buttonSizes = {
  sm: { h: 32, px: 16, py: 12 },
  md: { h: 44, px: 24, py: 14 },
  lg: { h: 48, px: 48, py: 16 },
};

type ButtonVariants = keyof typeof buttonVariants;
type ButtonSize = keyof typeof buttonSizes;

export interface IConteinerProps {
  variantColor?: ButtonVariants;
  size?: ButtonSize;
  variantStyle?: "contained" | "outlined" | "texted";
}

export const Container = styled.button<IConteinerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  font-size: ${toRem(14)};
  transition: all ease 0.3s;
  &:not(:disabled) {
    cursor: pointer;
  }

  ${({ size, variantColor, variantStyle }) => {
    const buttonSize = buttonSizes[size];
    const buttonVariant = buttonVariants[variantColor][variantStyle];
    return css`
      height: ${buttonSize.h}px;
      padding: ${buttonSize.py}px ${buttonSize.px}px;
      background-color: ${buttonVariant.bgColor};
      color: ${buttonVariant.color};
      border: 1px solid ${buttonVariant.borderColor};
      &:not(:disabled) {
        &:hover {
          /* background-color: ${darken(0.1, buttonVariant.bgColor)}; */
          background-color: ${buttonVariant.hoverBgColor};
          border-color: ${buttonVariant.hoverBgColor};
          color: ${buttonVariant.hoverColor};
        }
        &:focus {
          box-shadow: ${`0 0 0 3.2px ${rgba(buttonVariant.shadowColor, 0.5)}`};
        }
      }
      &:disabled {
        background-color: ${rgba(buttonVariant.bgColor, 0.65)};
        /* border: 1px solid ${rgba(buttonVariant.bgColor, 0.65)}; */
        border-color: ${rgba(buttonVariant.bgColor, 0.65)};
      }
    `;
  }}
`;
