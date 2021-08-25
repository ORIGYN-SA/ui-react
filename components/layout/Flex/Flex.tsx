import React from "react"
import styled from 'styled-components';

export type FlexProps = {
  justify?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around";
  align?: "flex-start" | "flex-end" | "center";
  flexFlow?: "column" | "row" | "column-reverse" | "row-reverse";
  fullWidth?: boolean;
  fullHeight?: boolean;
  gap?: number;
  relative?: boolean;
}

const StyledFlex = styled.div<FlexProps>`${({justify, align, fullWidth, fullHeight, flexFlow, relative, gap = 0}) => `
  display: flex;
  align-items: ${align};
  justify-content: ${justify};
  flex-flow: ${flexFlow};
  width: ${fullWidth ? '100%' : 'auto'};
  height: ${fullHeight ? '100%' : 'auto'};
  gap: ${gap}px;
  position: ${relative ? 'relative' : 'static' }
`}`;

export default StyledFlex;
