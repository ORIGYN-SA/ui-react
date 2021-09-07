import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import MoreLink from "./MoreLink";

export default {
  title: "Components/Interface/MoreLink",
  component: MoreLink,
} as Meta;

const Template: Story = (args) => (
  <MoreLink {...args} href="#">
    Read more
  </MoreLink>
);

export const Default = Template.bind({});
Default.args = {};
