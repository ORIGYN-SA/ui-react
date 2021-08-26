import React from "react"
import styled from 'styled-components';

export interface ContainerProps {
  size?: 'lg' | 'sm' | 'md' | 'full',
  padding?: string;
}

const StyledFlex = styled.div<ContainerProps>`${({size = 'full', padding, theme}) => `
  display: block;
  padding: ${padding ? padding : '0'};
  width: ${size === 'full' ? '100%' : `${theme.containers[size]}px`};
  max-width: 100%;
  box-sizing: border-box;
  margin: 0 auto;
`}`;

export default StyledFlex;
