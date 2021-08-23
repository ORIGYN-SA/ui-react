import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import TabContent, { TabContentProps } from "./TabContent";

export default {
  title: "Components/Interface/TabContent",
  component: TabContent,
} as Meta;

const Template: Story<TabContentProps> = (args) => (
  <TabContent {...args} />
);

export const Default = Template.bind({});
Default.args = {
  tabs: [{title: 'Digital Twin'}, {title: 'Selling'}, {title: 'Buying'}, {title: 'Transaction'}],
  content: [<div>Content 1</div>, <div>Content 2</div>, <div>Content 3</div>, <div>Content 4</div>]
};
