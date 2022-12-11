import React, {useState} from "react";
import styled from "styled-components";
import Button from "../Button";
import Flex from "../../layout/Flex";
import ThemeIcon from "../../icons/Theme";
import OrigynIcon from "../../icons/Origyn";
import { Link } from "react-router-dom";
import {HR, Icons} from "../../index";

const StyledNav = styled.div`
${({ theme}) => `
  display: block;
  ${theme.media.md}{
    display: none;
  }
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
`}`;

const MobileNav = styled.div`
  display: none;
  z-index: 10000;
  position: sticky;
  top: 0;
  height: auto;
  width: 100%;
  background-color: ${({ theme}) => theme.colors.BACKGROUND};
  color: ${({ theme}) => theme.colors.TEXT};
  ${({ theme}) => theme.media.md}{
    display: block;
  }
`
const MobileNavHead = styled.div`
  top: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
  padding: 16px;
  box-sizing: border-box;
`
const MobileMenu = styled.div`
  position: absolute;
  top: 64px;
  left: 0;
  width: 100%;
  height: calc(100vh - 64px);
  display: flex;
  flex-flow: column;
  box-sizing: border-box;
  background-color: ${({ theme}) => theme.colors.BACKGROUND};
  color: ${({ theme}) => theme.colors.TEXT};
`

const Navbar: React.FC<{navItems: any, onChangeTheme?: any}> = ({ navItems, onChangeTheme = () => {} }) => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <>
      <MobileNav>
        <MobileNavHead>
          <OrigynIcon/>
          <Button iconButton size="medium" onClick={() => setMobileMenu(!mobileMenu)}>
            {
              mobileMenu ? (
                <Icons.CloseIcon width={24} />
              ) : (
                <Icons.MenuIcon />
              )
            }
          </Button>
        </MobileNavHead>
        {
          mobileMenu && (
            <MobileMenu>
              {
                navItems.map((item) => <Link to={item.href}><Button textButton>{item.icon()} {item.title}</Button></Link>)
              }
              <br/>
              <HR />
              <br/>
              <Button onClick={onChangeTheme}>
                <ThemeIcon/>
                Appearance: Light
              </Button>
            </MobileMenu>
          )
        }
      </MobileNav>
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
            <Button iconButton onClick={onChangeTheme}>
              <ThemeIcon/>
            </Button>
          </Flex>
        </Flex>
      </StyledNav>
    </>
  );
};

export default Navbar;
