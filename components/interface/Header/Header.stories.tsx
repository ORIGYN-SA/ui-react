import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Header, { HeaderProps } from "./Header";

export default {
  title: "Components/Interface/Header",
  component: Header,
} as Meta;

const Template: Story<HeaderProps> = (args) => (
  <Header {...args} />
);

export const Default = Template.bind({});
Default.args = { isLoggedIn: false };
