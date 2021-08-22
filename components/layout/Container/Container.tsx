import React from "react"
import styled from 'styled-components';

export interface ContainerProps {
  size: 'lg' | 'sm' | 'md'
}

const StyledFlex = styled.div<ContainerProps>`${({size, theme}) => `
  display: block;
  max-width: ${theme.containers[size]};
  margin: o auto;
`}`;

export default StyledFlex;
