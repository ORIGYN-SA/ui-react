import React, {useState} from "react";
import styled from "styled-components";
import Flex from "../../layout/Flex";
import MenuLink from "../MenuLink";
import Banner from "../Banner";
import Button from "../Button/Button";
import Status from "../Status";
import Chip from "../Chip";
import {theme} from "../../../utils";

export type SecondaryNavProps = {
  tabs: Array<{ title: string, id: string }>;
  content: Array<any>;
  title?: string;
  onConnect?: () => {};
  principal?: string;
};

const StyledSecondaryNav = styled(Flex)`
  ${({theme}) => `
  background: linear-gradient(90deg, ${theme.colors.NAVIGATION_BACKGROUND_LIGHT} 0%, ${theme.colors.NAVIGATION_BACKGROUND} 100%);
  color: ${theme.colors.WHITE};
  font-weight: 600;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: -0.15px;
  height: 80px;
  gap: 32px;
  padding: 0 32px;
  
  ${theme.media.sm} {
    padding: 0 5px;
    overflow: auto;
    width: 100%;
    gap: 10px;
    justify-content: space-evenly;
  }
`}
`;

const StyledTab = styled(MenuLink)`
  ${({theme}) => `
    color: ${theme.colors.TEXT};
    display: flex;
    height: 100%;
    align-items: center;
    padding: 0;
    opacity: 0.5;
  
  &:hover {
    opacity: 1;
  }
  &.active {
    opacity: 1;
    color: ${theme.colors.TEXT};
    border-bottom: 2px solid ${theme.colors.TEXT};
  }
`}
`;

const NavTitle = styled(Flex)`
  font-weight: 600;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: -0.15px;
  color: ${({theme}) => theme.colors.TEXT};;
  
  margin-right: 32px;
`

const StyledWallet = styled(Chip)`
  position: relative;
  width: 65px;
  background: ${({theme}) => theme.colors.BACKGROUND};;
  border: 1px solid ${({theme}) => theme.colors.BORDER};;
  opacity: 1;
  
   &:after {
     content: "";
     display: block;
     position: absolute;
     width: 8px;
     height: 8px;
     border-radius: 50%;
     top: 0;
     right: 0;
  
     background: ${({theme}) => theme.colors.SUCCESS};
  
     border: 1px solid #000000;
   }
`;

const StyledContent = styled.div`
  background: ${({theme}) => theme.colors.BACKGROUND};;
  /* Primary/800: border (dark) */

  border-top: 1px solid ${({theme}) => theme.colors.BORDER};;
  border-radius: 16px 0px 0px 0px;
  width: 100%;
  height: 100%;
`

const SecondaryNav = ({tabs, content, title, onConnect, principal}: SecondaryNavProps) => {
  const [currentTab, setCurrentTab] = useState(0);

  return (
    <Banner bgColor="transparent" flexFlow="column" align="flex-start" padding="0">
      <Banner bgColor="transparent" fullWidth justify="space-between" align="center" padding="0 24px">
        <Flex align="center" gap={32}>
          <p><b>{title}</b></p>
          <StyledSecondaryNav>
            {tabs.map(({id, title}, index) => (
              <StyledTab
                as="div"
                key={id}
                className={index === currentTab ? "active" : ""}
                onClick={() => setCurrentTab(index)}
              >
                {title}
              </StyledTab>
            ))}
          </StyledSecondaryNav>
        </Flex>
        {
          onConnect && !principal && (
            <div><Button size="small" onClick={onConnect}>Connect</Button></div>
          )
        }
        {
          principal && <StyledWallet size="small">{principal.slice(0,2)}...{principal.slice(-4)}</StyledWallet>
        }
      </Banner>
      <StyledContent>
        {content[currentTab]}
      </StyledContent>
    </Banner>
  );
};

export default SecondaryNav;
