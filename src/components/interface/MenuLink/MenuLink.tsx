import styled from "styled-components";
import { NavLink } from "react-router-dom";

export type MenuLinkProps = {};

const StyledMenuLink = styled(NavLink)<MenuLinkProps>`
  ${({ theme }) => `
  text-decoration: none;
  padding: 10px 0;
  box-sizing: border-box;
  color: ${theme.colors.DARK_GREY};
  cursor: pointer;
  border-bottom: 3px solid transparent;
  
  &:hover {
    border-color: ${theme.colors.BLACK};
  }
  &.active {
    color: ${theme.colors.BLACK};
    border-color: ${theme.colors.ACCENT_COLOR};
  }
`}
`;

export default StyledMenuLink;
