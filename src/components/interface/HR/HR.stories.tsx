import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import HR, { HRProps } from "./HR";

export default {
  title: "Components/Interface/HR/All stories",
  component: HR,
} as Meta;

const Template: Story<HRProps> = (args) => <HR {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const accent = Template.bind({});
accent.args = { accent: true };

export const withMargins = Template.bind({});
withMargins.args = { marginTop: 20, marginBottom: 20 };
