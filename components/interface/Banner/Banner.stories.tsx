import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Banner, { BannerProps } from "./Banner";

export default {
  title: "Components/Interface/Banner/All stories",
  component: Banner,
} as Meta;

const Template: Story<BannerProps> = (args) => <Banner {...args}>Content</Banner>;

export const Default = Template.bind({});
Default.args = {};

export const whiteBackground = Template.bind({});
whiteBackground.args = { bgColor: "#ffffff", textColor: "#000000" };

export const colorBackground = Template.bind({});
colorBackground.args = { bgColor: "#FFBB00", textColor: "#000000" };

export const imageBackground = Template.bind({});
imageBackground.args = { bgImage: "http://placehold.jp/1600x800.png", textColor: "#ffffff" };

export const customPadding = Template.bind({});
customPadding.args = { padding: "20px" };