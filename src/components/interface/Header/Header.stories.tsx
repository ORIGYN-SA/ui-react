import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Header, { HeaderProps } from "./Header";

export default {
  title: "Components/Interface/Header/All Stories",
  component: Header,
} as Meta;

const Template: Story<HeaderProps> = (args) => <Header {...args} />;

export const loggedIn = Template.bind({});
loggedIn.args = { isLoggedIn: true, logoSrc: "http://placehold.jp/161x37.png" };

export const loggedOut = Template.bind({});
loggedOut.args = { isLoggedIn: false, logoSrc: "http://placehold.jp/161x37.png" };
