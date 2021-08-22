import React from "react"
import styled from 'styled-components';

export type FlexProps = {
  justify?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around";
  align?: "flex-start" | "flex-end" | "center";
  flexFlow?: "column" | "row" | "column-reverse" | "row-reverse";
  fullWidth?: boolean;
  gap?: number;
}

const StyledFlex = styled.div<FlexProps>`${({justify, align, fullWidth, flexFlow, gap = 0}) => `
  display: flex;
  align-items: ${align};
  justify-content: ${justify};
  flex-flow: ${flexFlow};
  width: ${fullWidth ? '100%' : 'auto'};
  gap: ${gap}px;
`}`;

export default StyledFlex;
