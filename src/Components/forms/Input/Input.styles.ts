import { rem } from "polished";
import styled from "styled-components";
import { formTextStyle } from "../../helpers/formTextStyle";

export const Container = styled.input`
  height: ${rem(46)};
  ${formTextStyle}
`;
