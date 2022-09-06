import styled from "styled-components";
import {theme} from "../../../utils";

type TStatus = keyof typeof theme.colors;

export type HRProps = {
  marginTop?: number;
  marginBottom?: number;
  color?: TStatus;
};

const HR = styled.hr<HRProps>`
  ${({ color="BLACK", marginTop = 0, marginBottom = 0, theme }) => `
  border: none;
  border-bottom: 1px solid ${theme.colors[color]};
  margin: ${marginTop}px 0 ${marginBottom}px 0;
`}
`;

export default HR;
