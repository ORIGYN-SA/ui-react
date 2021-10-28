import React, { useState } from "react";
import styled from "styled-components";
import Flex from "../../layout/Flex";
import MenuLink from "../MenuLink";

export interface StepperProps {
  tabs: Array<{ title: React.ReactNode  }>;
  content: Array<any>;
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
  ${({ theme }) => `
  color: ${theme.colors.MID_GREY};
  background: #ffffff;
  flex-grow: 1;
  border-bottom: 3px solid ${theme.colors.MID_GREY};
  padding: 17px 0;
  text-align: center;
    
  &.active {
    color: ${theme.colors.BLACK};
    border-bottom: 3px solid ${theme.colors.BLACK};
  }
`}
`;

const Stepper = ({ tabs, content }: StepperProps) => {
  const [currentTab, setCurrentTab] = useState(0);

  return (
    <Flex flexFlow="column">
      <StyledTabContent gap={0}>
        {tabs.map(({ title }, index) => (
          <StyledTab
            as="div"
            className={index <= currentTab ? "active" : ""}
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
