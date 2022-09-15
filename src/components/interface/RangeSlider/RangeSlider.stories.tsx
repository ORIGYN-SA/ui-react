import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import RangeSlider, { RangeSliderProps } from "./RangeSlider";
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

export const normal = Template.bind({});
normal.args = {
  disabled: false,
  min: 10,
  max: 400,
  step: 10,
  initialValue: 200,
};

export const disabled = Template.bind({});
disabled.args = {
  disabled: true,
  min: 0,
  max: 1000,
  step: 50,
  initialValue: 800,
};