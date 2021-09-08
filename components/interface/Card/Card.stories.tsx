import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Card, { CardProps } from "./Card";

export default {
  title: "Components/Interface/Card",
  component: Card,
} as Meta;

const Template: Story<CardProps> = (args) => <Card {...args}>Text</Card>;

export const Default = Template.bind({});
Default.args = {};
