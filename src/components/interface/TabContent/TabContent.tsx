import React, {useState} from "react";
import styled from "styled-components";
import Flex from "../../layout/Flex";
import MenuLink from "../MenuLink";

export type TabContentProps = {
  tabs: Array<{ title: string, id: string }>;
  content: Array<any>;
};

const StyledTabContent = styled(Flex)`
  ${({theme}) => `
  font-weight: 600;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: -0.15px;
  height: 50px;
  gap: 32px;
  justify-content: center;
  color: #151515;
  border-bottom: 1px solid #E3E3E3;
  
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
    color: #5F5F5F;
    display: flex;
    height: 100%;
    align-items: center;
    padding: 0;
  
  &:hover {
    color: #151515;
  }
  &.active {
    color: #151515;
    border-bottom: 2px solid #151515;
  }
`}
`;

const TabContent = ({tabs, content}: TabContentProps) => {
  const [currentTab, setCurrentTab] = useState(0);

  return (
    <Flex flexFlow="column" align="flex-start">
      <StyledTabContent>
        {tabs.map(({id, title}, index) => (
          <StyledTab
            as="h4"
            key={id}
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
