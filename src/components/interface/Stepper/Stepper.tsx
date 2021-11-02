import React, { useState } from "react";
import styled from "styled-components";
import Flex from "../../layout/Flex";
import MenuLink from "../MenuLink";

export interface StepperProps {
  tabs: Array<{ title: React.ReactNode  }>;
  content: Array<any>;
  tabNavigable?: string;
};

const StyledTabContent = styled(Flex)`
  ${({ theme }) => `
  font-weight: bold;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  background: ${theme.colors.WHITE};
  height: 50px;
  padding: 0;
  color: #ffffff;
`}
`;

const StyledTab = styled(MenuLink)`
  ${({ theme, width }) => `
  color: ${theme.colors.MID_GREY};
  background: #ffffff;
  flex-grow: ${width ? 'auto' : 1};
  width: ${width ? width : 'width'};
  border-bottom: 3px solid ${theme.colors.MID_GREY};
  padding: 17px 0;
  text-align: center;
  
    
  &.active {
    color: ${theme.colors.BLACK};
    border-bottom: 3px solid ${theme.colors.BLACK};
  }
`}
`;

const Stepper = ({ tabs, content, tabNavigable="back" }: StepperProps) => {
  const [currentTab, setCurrentTab] = useState(0);

  return (
    <Flex flexFlow="column" fullWidth>
      <StyledTabContent fullWidth gap={0}>
        {tabs.map(({ title }, index) => (
          <StyledTab
            as="div"
            className={index <= currentTab ? "active" : ""}
            onClick={() => {
              switch (tabNavigable) {
                case "back":
                  if (currentTab > index) {
                    setCurrentTab(index);
                  }
                  break;
                case "forward":
                  if (currentTab < index) {
                    setCurrentTab(index);
                  }
                  break;
                case "any":
                  setCurrentTab(index);
                  break;
              }
            }}
          >
            {title}
          </StyledTab>
        ))}
      </StyledTabContent>
      {content[currentTab]}
    </Flex>
  );
};

// TODO: consider refactoring
export const useStepper = (steps: Array<{ label: React.ReactNode; content: any }>) => {
  const [currentTab, setCurrentTab] = useState(0);

  return [
    <StyledTabContent gap={0}>
      {steps.map(({ label }, index) => (
        <StyledTab
          as="div"
          className={index <= currentTab ? "active" : ""}
          onClick={() => setCurrentTab(index)}
        >
          {label}
        </StyledTab>
      ))}
    </StyledTabContent>,
    steps[currentTab].content,
    currentTab,
    setCurrentTab,
  ];
};

export default Stepper;
