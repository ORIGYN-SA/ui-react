import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Card, { CardProps } from "./Card";

export default {
  title: "Components/Interface/Card/All stories",
  component: Card,
} as Meta;

const Template: Story<CardProps> = (args) => <Card {...args}>Text</Card>;

export const noProps = Template.bind({});
noProps.args = {};

export const customPadding = Template.bind({});
customPadding.args = {
  padding: "24px",
};

export const mediumShadow = Template.bind({});
mediumShadow.args = {
  padding: "24px",
  shadow: "md",
};

export const largeShadow = Template.bind({});
largeShadow.args = {
  padding: "24px",
  shadow: "lg",
};
