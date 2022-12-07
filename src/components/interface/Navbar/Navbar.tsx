import React from "react";
import styled from "styled-components";
import Button from "../Button";
import Flex from "../../layout/Flex";
import ThemeIcon from "../../icons/theme";
import OrigynIcon from "../../icons/origyn";
import { Link } from "react-router-dom";

const StyledNav = styled.div`
${({ theme}) => `
  background-color: ${theme.colors.DARK_BLACK};
  color: ${theme.colors.WHITE};
  padding: 24px;
  box-sizing: border-box;
  width: 104px;
  height: 100vh;

  li {
    list-style: none;
  }

  a {
    color: ${theme.colors.WHITE};

  }

  svg {
    fill: ${theme.colors.WHITE}
  }
`}`

const Navbar: React.FC<{navItems: any, onConnect?: any}> = ({ navItems, onConnect }) => {
  return (
    <StyledNav>
      <Flex flexFlow="column" align="center" justify="space-between" fullHeight>
        <Flex flexFlow="column" align="center" gap={8}>
          <div style={{marginBottom: '24px'}} >
            <OrigynIcon/>
          </div>
          {
            navItems.map((item) => <Link to={item.href}><Button iconButton size="large">{item.icon()}</Button></Link>)
          }
        </Flex>

        <Flex flexFlow="column" align="center">
          {
            onConnect && (
              <Button btnType="small" onClick={onConnect}>Connect</Button>
            )
          }
          <div className="bottomItem2">
            <ThemeIcon/>
          </div>
        </Flex>
      </Flex>
    </StyledNav>
  );
};

export default Navbar;
