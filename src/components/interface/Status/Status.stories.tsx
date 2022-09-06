import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Status, { StatusProps } from "./Status";

export default {
  title: "Components/Interface/Status/All stories",
  component: Status,
} as Meta;

const Template: Story<StatusProps> = (args) => <Status {...args} />;

export const Pending = Template.bind({});
Pending.args = {
  label: "Test",
  status: "PROGRESS",
  width: '200px',
};

export const Done = Template.bind({});
Done.args = {
  label: "Test",
  status: "SUCCESS",
};

export const Failed = Template.bind({});
Done.args = {
  label: "Test",
  status: "ERROR",
};
