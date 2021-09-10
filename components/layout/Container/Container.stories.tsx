import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Container, { ContainerProps } from "./Container";

export default {
  title: "Components/Layout/Container/All stories",
  component: Container,
} as Meta;

const Template: Story<ContainerProps> = (args) => (
  <Container {...args}>
    <div style={{ backgroundColor: "#aaa" }}>Content</div>
    <div style={{ backgroundColor: "#aaa" }}>Content</div>
    <div style={{ backgroundColor: "#aaa" }}>Content</div>
  </Container>
);

export const MidSize = Template.bind({});
MidSize.args = { size: "md" };

export const LargeSize = Template.bind({});
LargeSize.args = { size: "lg" };

export const SmallSize = Template.bind({});
SmallSize.args = { size: "sm" };
