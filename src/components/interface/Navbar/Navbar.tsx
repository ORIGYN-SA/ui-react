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
      <svg>
        <defs>
          <linearGradient
            id="paint0_linear_1649_2905"
            x1="5.23311"
            y1="7.10534"
            x2="5.23311"
            y2="22.6188"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.03" stop-color="#05612D" />
            <stop offset="0.3" stop-color="#017E36" />
            <stop offset="0.33" stop-color="#138838" />
            <stop offset="0.4" stop-color="#2E963C" />
            <stop offset="0.48" stop-color="#41A13F" />
            <stop offset="0.55" stop-color="#4CA740" />
            <stop offset="0.63" stop-color="#50A941" />
            <stop offset="0.73" stop-color="#57AB3C" />
            <stop offset="0.88" stop-color="#6CAF30" />
            <stop offset="0.91" stop-color="#70B02D" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_1649_2905"
            x1="23.2229"
            y1="22.6182"
            x2="2.28735"
            y2="22.6182"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.03" stop-color="#1F9CD4" />
            <stop offset="0.3" stop-color="#1470B1" />
            <stop offset="0.36" stop-color="#1A5EA2" />
            <stop offset="0.44" stop-color="#214B92" />
            <stop offset="0.53" stop-color="#254088" />
            <stop offset="0.63" stop-color="#263C85" />
            <stop offset="0.69" stop-color="#25397E" />
            <stop offset="0.79" stop-color="#223169" />
            <stop offset="0.9" stop-color="#1E2448" />
            <stop offset="0.91" stop-color="#1E2345" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_1649_2905"
            x1="2.68839"
            y1="-2.50904"
            x2="27.6564"
            y2="11.9064"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#EDE229" />
            <stop offset="0.44" stop-color="#F3A30F" />
            <stop offset="0.57" stop-color="#E96316" />
            <stop offset="0.68" stop-color="#E1321B" />
            <stop offset="0.73" stop-color="#DE1F1D" />
            <stop offset="0.84" stop-color="#DC1820" />
            <stop offset="1" stop-color="#DB1222" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_1649_2905"
            x1="23.2214"
            y1="27.3971"
            x2="23.2214"
            y2="5.39851"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#293170" />
            <stop offset="0.06" stop-color="#313272" />
            <stop offset="0.14" stop-color="#473577" />
            <stop offset="0.25" stop-color="#6A3A7F" />
            <stop offset="0.29" stop-color="#793C82" />
            <stop offset="0.44" stop-color="#803483" />
            <stop offset="0.66" stop-color="#852E83" />
            <stop offset="0.97" stop-color="#59132A" />
            <stop offset="1" stop-color="#551022" />
          </linearGradient>
        </defs>
      </svg>
      <MobileNav>
        <MobileNavHead>
          <Icons.OrigynIcon/>
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
              <Button textButton onClick={onChangeTheme}>
                <ThemeIcon/>
              </Button>
            </MobileMenu>
          )
        }
      </MobileNav>
      <StyledNav>
        <Flex flexFlow="column" align="center" justify="space-between" fullHeight>
          <Flex flexFlow="column" align="center" gap={8}>
            <div style={{marginBottom: '24px'}} >
              <Icons.OrigynIcon/>
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
