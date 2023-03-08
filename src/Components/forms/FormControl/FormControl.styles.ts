import styled from "styled-components";

type VariantStyle = "success" | "danger" | "warning";

export interface IConteinerProps {
  state?: VariantStyle;
  feedbackText?: string;
}

export const Container = styled.div<IConteinerProps>`
  display: flex;
  flex-direction: column;
`;
