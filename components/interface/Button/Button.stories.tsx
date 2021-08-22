import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Button, { ButtonProps } from "./Button";

export default {
  title: "Components/Interface/Button",
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => (
  <Button {...args}>Text</Button>
);

export const Default = Template.bind({});
Default.args = { size: 'sm', fullWidth: false, disabled: false, outlined: false, primary: false };
