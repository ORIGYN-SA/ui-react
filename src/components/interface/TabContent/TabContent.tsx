import React, {useState} from "react";
import styled from "styled-components";
import Flex from "../../layout/Flex";
import MenuLink from "../MenuLink";

export type TabContentProps = {
  tabs: Array<{ title: string }>;
  content: Array<any>;
};

const StyledTabContent = styled(Flex)`
  ${({theme}) => `
  background: ${theme.colors.VERY_DARK_GREY};
  height: 50px;
  gap: 32px;
  justify-content: center;
  color: ${theme.colors.WHITE};
  
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
    color: ${theme.colors.MID_GREY};
    display: flex;
    height: 100%;
    align-items: center;
    padding: 0;
  
  &:hover {
    color: ${theme.colors.WHITE};
  }
  &.active {
    color: ${theme.colors.WHITE};
    border-bottom: 3px solid ${theme.colors.WHITE};
  }
`}
`;

const TabContent = ({tabs, content}: TabContentProps) => {
  const [currentTab, setCurrentTab] = useState(0);

  return (
    <Flex flexFlow="column">
      <StyledTabContent>
        {tabs.map(({title}, index) => (
          <StyledTab
            as="h4"
            className={index === currentTab ? "active" : ""}
            onClick={() => setCurrentTab(index)}
          >
            {title}
          </StyledTab>
        ))}
      </StyledTabContent>
      {content[currentTab]}
    </Flex>
  );
};

export default TabContent;
