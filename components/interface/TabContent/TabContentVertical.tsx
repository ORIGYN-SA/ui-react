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
  ${theme.media.md}{
    flex-direction: row;
    max-width: 100%;
    white-space: nowrap;
    overflow: scroll;
    margin-bottom: 25px;
  }
`}
`;

const StyledTab = styled(MenuLink)`
  ${() => `
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
  ${({ theme }) => `
  flex-grow: 1;
  padding-left: 35px;
  ${theme.media.md}{
    padding-left: 0;
  }
`}
`;

const TabContentVertical = ({ tabs, content }: TabContentVerticalProps) => {
  const [currentTab, setCurrentTab] = useState(0);

  return (
    <Flex adapt>
      <StyledTabContent gap={10}>
        {tabs.map(({ title }, index) => (
          <StyledTab
            as="div"
            className={index === currentTab ? "active" : ""}
            onClick={() => setCurrentTab(index)}
          >
            {title}
          </StyledTab>
        ))}
      </StyledTabContent>
      <StyledContent>{content[currentTab]}</StyledContent>
    </Flex>
  );
};

export default TabContentVertical;
