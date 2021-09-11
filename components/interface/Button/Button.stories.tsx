import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Button, { ButtonProps } from "./Button";

export default {
  title: "Components/Interface/Button",
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args}>Text</Button>;

export const DefaultButton = Template.bind({});
DefaultButton.args = {
  size: "sm",
  fullWidth: false,
  disabled: false,
  bordered: false,
  primary: false,
};

export const FullButton = Template.bind({});
FullButton.args = {
  size: "sm",
  fullWidth: true,
  disabled: false,
  bordered: false,
  primary: false,
};

export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
  size: "sm",
  fullWidth: false,
  disabled: false,
  bordered: false,
  primary: true,
};
