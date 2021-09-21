import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Grid from "../../layout/Grid";
import Slider, { SliderProps } from "./Slider";

export default {
  title: "Components/Interface/ProductCard",
  component: Slider,
} as Meta;

const Template: Story<SliderProps> = (args) => (
  <Grid gap={20} columns={5}>
    <Slider {...args} />
  </Grid>
);

export const Default = Template.bind({});
Default.args = {};
