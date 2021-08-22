import React from "react"
import styled from 'styled-components';

export type ButtonProps = {
  size: 'sm' | 'md' | 'lg';
  primary?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  outlined?: boolean;
}

const StyledFlex = styled.div<ButtonProps>`${({ size, disabled, fullWidth, outlined, primary, theme }) => `
  display: flex;
  width: 320px;
  height: 50px;
  font-weight: bold;
  font-size: 13px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  align-items: center;
  justify-content: center;
  background-color: ${ primary ? theme.colors.WHITE : theme.colors.BLACK };
  color: ${ primary ? theme.colors.BLACK : theme.colors.WHITE };
`}`;

export default StyledFlex;
