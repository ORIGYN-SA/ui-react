import React from "react"
import styled from 'styled-components';

export interface ContainerProps {
  size: 'lg' | 'sm' | 'md',
  padding?: string;
}

const StyledFlex = styled.div<ContainerProps>`${({size, padding, theme}) => `
  display: block;
  padding: ${padding ? padding : '0'};
  max-width: ${theme.containers[size]}px;
  margin: 0 auto;
`}`;

export default StyledFlex;