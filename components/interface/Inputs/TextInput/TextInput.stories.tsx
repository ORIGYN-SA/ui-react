import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Grid from "../../../layout/Grid";
import TextInput, { TextInputProps } from "./TextInput";

export default {
  title: "Components/Interface/Inputs/TextInput/All stories",
  component: TextInput,
} as Meta;

const Template: Story<TextInputProps> = (args) => (
  <Grid gap={20} columns={5}>
    <TextInput {...args} />
  </Grid>
);

export const Default = Template.bind({});
Default.args = { name: "input", label: "Label text", placeholder: "Placeholder text" };

export const filled = Template.bind({});
filled.args = { name: "input", label: "Label text", value: "Filled", placeholder: "Placeholder text" };

export const error = Template.bind({});
error.args = { name: "input", error: "This is not a valid email address", value: "error", label: "Label text", placeholder: "placeholder text" };
