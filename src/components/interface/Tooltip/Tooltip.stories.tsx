import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Button, { ButtonProps } from "./Tooltip";
import ArrowRight from "../../icons/ArrowRight";
import Flex from "../../layout/Flex";

export default {
  title: "Components/Interface/Tooltip/All stories",
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <>
  <Flex gap={16}>
    <Button {...args}>Enabled</Button>
    <Button {...args} className="hover">Hovered</Button>
    <Button {...args} className="active">Pressed</Button>
    <Button {...args} disabled>Disabled</Button>
  </Flex>
  <br/>
  <Flex gap={16}>
    <Button {...args}>Enabled <ArrowRight width={4} height={8} /></Button>
    <Button {...args} className="hover">Hovered <ArrowRight width={4} height={8} /></Button>
    <Button {...args} className="active">Pressed <ArrowRight width={4} height={8} /></Button>
    <Button {...args} disabled>Disabled <ArrowRight width={4} height={8} /></Button>
  </Flex>
  <br/>
  <Flex gap={16}>
    <Button {...args} iconButton><ArrowRight width={4} height={8} /></Button>
    <Button {...args} iconButton className="hover"><ArrowRight width={4} height={8} /></Button>
    <Button {...args} iconButton className="active"><ArrowRight width={4} height={8} /></Button>
    <Button {...args} iconButton disabled><ArrowRight width={4} height={8} /></Button>
  </Flex>
</>;

export const primary = Template.bind({});
primary.args = {};

export const primaryDisabled = Template.bind({});
primaryDisabled.args = { disabled: true };

export const small = Template.bind({});
small.args = {
  btnType: "small",
};

export const medium = Template.bind({});
medium.args = {
  btnType: "medium",
};

export const large = Template.bind({});
large.args = {
  btnType: "large",
};

export const smallTextButton = Template.bind({});
smallTextButton.args = {
  btnType: "small",
  textButton: true
};

export const mediumTextButton = Template.bind({});
mediumTextButton.args = {
  btnType: "medium",
  textButton: true
};

export const largeTextButton = Template.bind({});
largeTextButton.args = {
  btnType: "large",
  textButton: true
};