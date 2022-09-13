import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import RangeSlider, { RangeSliderProps } from "./RangeSlider";
import Grid from "../../layout/Grid";
import Flex from "../../layout/Flex";

export default {
  title: "Components/Interface/RangeSlider/All stories",
  component: RangeSlider,
} as Meta;

const Template: Story<RangeSliderProps> = (args) =>(
  <Flex gap={20}>
      <RangeSlider {...args} />
  </Flex>
  
);

export const primary = Template.bind({});
primary.args = {};

export const normal = Template.bind({});
normal.args = {
  disabled: false,
};

export const disabled = Template.bind({});
disabled.args = {
  disabled: true,
};