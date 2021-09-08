import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Banner, { BannerProps } from "./Banner";

export default {
  title: "Components/Interface/Banner",
  component: Banner,
} as Meta;

const Template: Story<BannerProps> = (args) => <Banner {...args}>Text</Banner>;

export const Default = Template.bind({});
Default.args = {};
