import styled from "styled-components";
import { NavLink } from "react-router-dom";

export type MenuLinkProps = {};

const StyledMenuLink = styled(NavLink)<MenuLinkProps>`
  ${({ theme }) => `
  position: relative;
  font-weight: bold;
  font-size: 16px;
  line-height: 16px;
  letter-spacing: 0.1em;
  text-decoration: none;
  padding: 8px 0;
  color: ${theme.colors.BLACK};
  opacity: 0.5;
  cursor: pointer;
  // border-bottom: 3px solid transparent;
  
  &::after {
    content: "";
    width: 100%;
    height: 3px;
    position: absolute;
    left: 0;
    bottom: 4px;
  }
  
  &.active {
    opacity: 1;
    &::after {
      background-color: ${theme.colors.ACCENT_COLOR};
    }
  }
  &:hover {
    opacity: 1;
    &::after {
      background-color: ${theme.colors.BLACK};
    }
  }
`}
`;

export default StyledMenuLink;
