import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import HR, { HRProps } from "./HR";

export default {
  title: "Components/Interface/HR",
  component: HR,
} as Meta;

const Template: Story<HRProps> = (args) => (
  <HR {...args} />
);

export const Default = Template.bind({});
Default.args = {  };
