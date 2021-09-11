import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Grid from "../../../layout/Grid";
import CheckboxInput, { CheckboxInputProps } from "./CheckboxInput";

export default {
  title: "Components/Interface/Inputs/CheckboxInput",
  component: CheckboxInput,
} as Meta;

const Template: Story<CheckboxInputProps> = (args) => (
  <Grid gap={20} columns={5}>
    <CheckboxInput {...args} />
  </Grid>
);

export const Default = Template.bind({});
Default.args = { name: "input", label: "Input Label" };
