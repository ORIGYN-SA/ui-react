import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Button, { ButtonProps } from "./Button";

export default {
  title: "Components/Interface/Button/All stories",
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args}>Text</Button>;

export const primary = Template.bind({});
primary.args = {};

export const primaryDisabled = Template.bind({});
primaryDisabled.args = { disabled: true };

export const secondary = Template.bind({});
secondary.args = {
  btnType: "secondary",
};

export const secondaryDisabled = Template.bind({});
secondaryDisabled.args = {
  btnType: "secondary",
  disabled: true,
};

export const ternary = Template.bind({});
ternary.args = {
  btnType: "ternary",
};

export const ternaryDisabled = Template.bind({});
ternaryDisabled.args = {
  btnType: "ternary",
  disabled: true,
};

export const fullWidth = Template.bind({});
fullWidth.args = {
  size: "fullWidth",
};