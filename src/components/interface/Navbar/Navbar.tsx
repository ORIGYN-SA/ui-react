import React from "react";
import styled from "styled-components";
import Button from "../Button";
import Flex from "../../layout/Flex";
import ThemeIcon from "../../icons/Theme";
import OrigynIcon from "../../icons/Origyn";
import { Link } from "react-router-dom";

const StyledNav = styled.div`
${({ theme}) => `
  background-color: ${theme.colors.NAVIGATION_BACKGROUND};
  color: ${theme.colors.TEXT};
  padding: 24px;
  box-sizing: border-box;
  width: 104px;
  height: 100vh;
  position: sticky;
  top: 0;

  li {
    list-style: none;
  }

  a {
    color: ${theme.colors.WHITE};
  }

  svg {
    fill: currentColor;
  }
`}`

const StyledCustomButton = styled(Button)`
  background-color: transparent;
`

const Navbar: React.FC<{navItems: any}> = ({ navItems }) => {
  return (
    <StyledNav>
      <Flex flexFlow="column" align="center" justify="space-between" fullHeight>
        <Flex flexFlow="column" align="center" gap={8}>
          <div style={{marginBottom: '24px'}} >
            <OrigynIcon/>
          </div>
          {
            navItems.map((item) => <Link to={item.href}><StyledCustomButton iconButton size="large">{item.icon()}</StyledCustomButton></Link>)
          }
        </Flex>

        <Flex flexFlow="column" align="center">
          <div className="bottomItem2">
            <ThemeIcon/>
          </div>
        </Flex>
      </Flex>
    </StyledNav>
  );
};

export default Navbar;
