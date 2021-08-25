import React, {useState} from "react"
import styled from 'styled-components';
import Flex from '../../layout/Flex';
import MenuLink from "../MenuLink";

export type TabContentProps = {
  tabs: Array<{title: string}>;
  content: Array<any>;
}

const StyledTabContent = styled(Flex)`${({ theme }) => `
  background: #000000;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
  height: 50px;
  padding: 0 30px 0 240px;
  color: #ffffff;
`}`;

const StyledTabLink = styled(MenuLink)`${({ theme }) => `
  color: ${theme.colors.WHITE};
  padding: 17px 0;
    
  &.active {
    opacity: 1;
    color: ${theme.colors.WHITE};
    border-bottom: 3px solid ${theme.colors.WHITE};
  }
`}`;



const Header = ({tabs, content}: TabContentProps) => {
  const [currentTab, setCurrentTab] = useState(0);

  return (
    <Flex flexFlow="column">
      <StyledTabContent gap={40}>
        {
          tabs.map(({title}, index) => (
            <StyledTabLink className={index === currentTab ? 'active' : ''} onClick={() => setCurrentTab(index)}>{title}</StyledTabLink>
          ))
        }
      </StyledTabContent>
      {
        content[currentTab]
      }
    </Flex>
  )
}

export default Header;
