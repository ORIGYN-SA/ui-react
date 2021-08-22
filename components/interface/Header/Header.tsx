import React from "react"
import styled from 'styled-components';
import Flex from '../../layout/Flex';
import MenuLink from "../MenuLink";

export type HeaderProps = {

}

const StyledHeader = styled(Flex)<HeaderProps>`${({ theme }) => `
  background: #FFFFFF;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
  height: 88px;
  padding: 0 30px;
`}`;

const Header = () => {
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
      <Flex align="center" gap={15}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 3C11.66 3 13 4.34 13 6C13 7.66 11.66 9 10 9C8.34 9 7 7.66 7 6C7 4.34 8.34 3 10 3ZM10 17.2C7.5 17.2 5.29 15.92 4 13.98C4.03 11.99 8 10.9 10 10.9C11.99 10.9 15.97 11.99 16 13.98C14.71 15.92 12.5 17.2 10 17.2Z" fill="black"/>
        </svg>
        <p>ArtLover</p>
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="5" viewBox="0 0 10 5" fill="none">
          <path d="M0 0L5 5L10 0H0Z" fill="black"/>
        </svg>
      </Flex>
    </StyledHeader>
  )
}

export default Header;
