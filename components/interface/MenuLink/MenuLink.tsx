import styled from "styled-components";
import { NavLink } from "react-router-dom";

export type MenuLinkProps = {};

const StyledMenuLink = styled(NavLink)<MenuLinkProps>`
  ${({ theme }) => `
  font-weight: bold;
  font-size: 13px;
  line-height: 16px;
  letter-spacing: 0.1em;
  text-decoration: none;
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
`}
`;

export default StyledMenuLink;
