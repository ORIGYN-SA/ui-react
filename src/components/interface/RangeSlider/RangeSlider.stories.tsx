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
  <Flex>
      <RangeSlider {...args} />
  </Flex>
  
);

export const normal = Template.bind({});

export const setted = Template.bind({});
setted.args = {
  disabled: false,
  min: 100,
  max: 100000,
  step:100,
  initialValue: 80000,
};

export const settedwithfn = Template.bind({});
settedwithfn.args = {
  disabled: false,
  min: 100,
  max: 1000,
  step:100,
  initialValue: 400,
  onchange: (value) => {
    if(value=='500'){
      alert("You are going to set the value to 500");
    };
    }
};

export const disabled = Template.bind({});
disabled.args = {
  disabled: true,
  min: 0,
  max: 1000,
  step: 50,
  initialValue: 800,
};