import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Balance, { BalanceCardProps } from "./BalanceCard";

import ICPIcon from "../../icons/DifinityLogo";

export default {
  title: "Components/Interface/BalanceCard/All Stories",
  component: Balance,
} as Meta;

const Template: Story<BalanceCardProps> = (args) => <Balance {...args} />;

export const noIcon = Template.bind({});
noIcon.args = {
  balance: 10000,
  name: "ICP",
};

export const withIcon = Template.bind({});
withIcon.args = {
  balance: 10000,
  name: "ICP",
  icon: <ICPIcon width={34} height={16} />
};

export const smallAmount = Template.bind({});
smallAmount.args = {
  balance: 0.0001234,
  name: "ICP",
  icon: <ICPIcon width={34} height={16} />
}

export const longNumber = Template.bind({});
longNumber.args = {
  balance: 1000000.0001234,
  name: "ICP",
  icon: <ICPIcon width={34} height={16} />
};

export const withActions = Template.bind({});
withActions.args = {
  balance: 1000000,
  name: "ICP",
  icon: <ICPIcon width={34} height={16} />,
  actions: {}
};

export const whiteBackground = Template.bind({});
whiteBackground.args = {
  balance: 10000,
  name: "ICP",
  icon: <ICPIcon width={34} height={16} />,
  textColor: "#000000",
  bgColor: "#ffffff",
  actions: {}
};

export const customBackground = Template.bind({});
customBackground.args = {
  balance: 10000,
  name: "ICP",
  icon: <ICPIcon width={34} height={16} />,
  textColor: "#000000",
  bgColor: "#FFBB00",
  actions: {}
};
