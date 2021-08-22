import React from "react"
import styled from 'styled-components';

export type HRProps = {

}

const StyledCard = styled.hr<HRProps>`${({ theme }) => `
  opacity: 0.2;
  border: none;
  border-bottom: 1px solid #000000;
`}`;

export default StyledCard;
