import React, {useState} from "react"
import styled from 'styled-components';
import Flex from '../../layout/Flex';
import MenuLink from "../MenuLink";
import ProfileIcon from "../../icons/Profile";
import ArrowDownIcon from "../../icons/ArrowDown";
import Card from "../Card/Card";
import CheckboxInput from "../CheckboxInput/CheckboxInput";

export type HeaderProps = {
  isLoggedIn: boolean;
}

const StyledHeader = styled(Flex)`${({ theme }) => `
  background: #FFFFFF;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
  height: 88px;
  padding: 0 30px;
`}`;


const StyledProfileDropdown = styled(Card)`
  position: absolute;
  right: 0;
  top: 56px;
  width: 250px;
  padding: 17px 25px;
`;

const Header = ({isLoggedIn}: HeaderProps) => {
  const [isProfileOpened, setIsProfileOpened] = useState(false);
  return (
    <StyledHeader align="center" justify="space-between">
      <Flex gap={50}>
        <img src="http://placehold.jp/161x37.png" alt="logo"/>
        <Flex gap={40}>
          <MenuLink className="active">Browse</MenuLink>
          <MenuLink>Trading</MenuLink>
          <MenuLink>My Portfolio</MenuLink>
          <MenuLink>About</MenuLink>
        </Flex>
      </Flex>
      <Flex align="center" gap={15} relative onClick={() => setIsProfileOpened(!isProfileOpened)}>
        {
          isLoggedIn ? (
            <>
            <ProfileIcon />
            <p>ArtLover</p>
            <ArrowDownIcon />
              {
                isProfileOpened && (
                  <StyledProfileDropdown>
                    <Flex flexFlow="column" gap={30}>
                      <Flex flexFlow="column" gap={10}>
                        <p>My Account</p>
                        <p>Dashboard</p>
                      </Flex>
                      <div>
                        <p style={{opacity: "0.5"}}>Sign Out</p>
                      </div>
                    </Flex>
                  </StyledProfileDropdown>
                )
              }
            </>
          ) : (
            <p>Log In / Sign Up</p>
          )
        }
      </Flex>
    </StyledHeader>
  )
}

export default Header;
