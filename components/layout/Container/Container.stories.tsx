import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Container, { ContainerProps } from "./Container";

export default {
  title: "Components/Layout/Container",
  component: Container,
} as Meta;

const Template: Story<ContainerProps> = (args) => (
  <Container {...args}>
    <div style={{backgroundColor: "#aaa"}}>Content</div>
    <div style={{backgroundColor: "#aaa"}}>Content</div>
    <div style={{backgroundColor: "#aaa"}}>Content</div>
  </Container>
);

export const Default = Template.bind({});
Default.args = { size: "md" };
