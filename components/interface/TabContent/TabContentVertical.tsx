import React, { useState } from "react";
import styled from "styled-components";
import Flex from "../../layout/Flex";
import MenuLink from "../MenuLink";

export type TabContentVerticalProps = {
  tabs: Array<{ title: string }>;
  content: Array<any>;
};

const StyledTabContent = styled(Flex)`
  ${({ theme }) => `
  color: #ffffff;
  display: flex;
  flex-direction: column;
  max-width: 200px;
  width: 100%;
`}
`;

const StyledTabLink = styled(MenuLink)`
  ${({ theme }) => `
  color: #000;
  padding: 17px 0;
    
  &.active {
    opacity: 1;
    color: #000;
    border-bottom: 3px solid #EE9907;
  }
`}
`;
const StyledContent = styled.div`
  flex-grow: 1;
  padding-left: 35px;
`;

const TabContentVertical = ({ tabs, content }: TabContentVerticalProps) => {
  const [currentTab, setCurrentTab] = useState(0);

  return (
    <Flex flexFlow="row">
      <StyledTabContent gap={10}>
        {tabs.map(({ title }, index) => (
          <StyledTabLink
            className={index === currentTab ? "active" : ""}
            onClick={() => setCurrentTab(index)}
          >
            {title}
          </StyledTabLink>
        ))}
      </StyledTabContent>
      <StyledContent>{content[currentTab]}</StyledContent>
    </Flex>
  );
};

export default TabContentVertical;
