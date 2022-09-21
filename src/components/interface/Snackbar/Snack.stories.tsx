import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Grid from "../../layout/Grid";
import SnackProvider from "./SnackProvider";
import {Snack} from "./Snack";
import {Component1,Component2} from "./exampleComponent";

export default {
  title: "Components/Interface/Snackbar",
  component: Snack,
} as Meta;

const Template1: Story = (args) => (
  <SnackProvider>
  <Grid gap={20} columns={2}>
    <Component1/>
  </Grid>
  </SnackProvider>
);

const Template2: Story = (args) => (
  <SnackProvider>
  <Grid gap={20} columns={2}>
    <Component2/>
  </Grid>
  </SnackProvider>
);

export const oneline = Template1.bind({});
export const onelineicon = Template2.bind({});

