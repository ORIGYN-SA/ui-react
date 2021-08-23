import React from "react"
import styled from 'styled-components';

export type HRProps = {
  marginTop?: number;
  marginBottom?: number;
}

const StyledCard = styled.hr<HRProps>`${({ marginTop = 0, marginBottom = 0, theme }) => `
  opacity: 0.2;
  border: none;
  border-bottom: 1px solid #000000;
  margin: ${marginTop}px 0 ${marginBottom}px 0;
`}`;

export default StyledCard;
