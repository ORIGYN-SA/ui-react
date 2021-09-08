import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import MenuLink, { MenuLinkProps } from "./MenuLink";

export default {
  title: "Components/Interface/MenuLink",
  component: MenuLink,
} as Meta;

const Template: Story<MenuLinkProps> = (args) => (
  <div>
    <MenuLink {...args} />
    <MenuLink className="active" {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = { children: "Link text" };
