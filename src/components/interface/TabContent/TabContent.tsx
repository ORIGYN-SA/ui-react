import React, {useState} from "react";
import styled from "styled-components";
import Flex from "../../layout/Flex";
import MenuLink from "../MenuLink";

export type TabContentProps = {
  tabs: Array<{ title: string, id: string }>;
  content: Array<any>;
  fullWidth?: boolean;
  justify?: "center" | "flex-start" | "flex-end";
  borderBottom?: boolean;
};

const StyledTabContent = styled(Flex)<{borderBottom: boolean}>`
  ${({theme, borderBottom}) => `
  background-color: ${theme.colors.BLACK};
  color: ${theme.colors.WHITE};
  font-weight: 600;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: -0.15px;
  height: 50px;
  gap: 32px;
  ${theme.colors.WHITE}
  ${borderBottom ? "border-bottom: 1px solid #E3E3E3;" : "" }
  
  ${theme.media.sm} {
    padding: 0 5px;
    overflow: auto;
    width: 100%;
    gap: 10px;
    justify-content: space-evenly;
  }
`}
`;

const StyledTabs = styled(Flex)`
${({ theme}) => `
  background-color: ${theme.colors.BLACK};
  color: ${theme.colors.WHITE};

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

const StyledTab = styled(MenuLink)`
  ${({theme}) => `
    color: ${theme.colors.WHITE};
    display: flex;
    height: 100%;
    align-items: center;
    padding: 0;
    border-bottom: 2px solid ${theme.colors.WHITE};
    opacity: 0.5;
  
  &:hover {
    opacity: 1;
  }
  &.active {
    opacity: 1;
    color: ${theme.colors.WHITE};
    border-bottom: 2px solid ${theme.colors.WHITE};
  }
`}
`;

const TabContent = ({tabs, content, fullWidth=false, justify="center", borderBottom}: TabContentProps) => {
  const [currentTab, setCurrentTab] = useState(0);

  return (
    <Flex flexFlow="column" align="flex-start">
      <StyledTabContent fullWidth={fullWidth} justify={justify} borderBottom={borderBottom}>
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
