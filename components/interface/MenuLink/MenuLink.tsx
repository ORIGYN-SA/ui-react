import React from "react"
import styled from 'styled-components';

export type MenuLinkProps = {
}

const StyledMenuLink = styled.a<MenuLinkProps>`${({ theme }) => `
  font-weight: bold;
  font-size: 13px;
  line-height: 16px;
  letter-spacing: 0.1em;
  padding: 8px 0;
  color: ${theme.colors.BLACK};
  opacity: 0.5;
  cursor: pointer;
  border-bottom: 3px solid transparent;
  
  &.active {
    opacity: 1;
    border-bottom: 3px solid ${theme.colors.ACCENT_COLOR};
  }
  &:hover {
    opacity: 1;
    border-bottom: 3px solid ${theme.colors.BLACK};
  }
`}`;

export default StyledMenuLink;
