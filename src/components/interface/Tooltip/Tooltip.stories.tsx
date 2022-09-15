import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Tooltip from "./Tooltip";
import ArrowRight from "../../icons/ArrowRight";
import Flex from "../../layout/Flex";
import {
  TooltipWrapper,
  TooltipTarget,
  CenterContainer,
  TooltipBox,
} from "./styled";

export default {
  title: "Components/Interface/Tooltip/All stories",
  component: Tooltip,
} as Meta;

const Template: Story = (args: any) => (
  <>
    <Flex gap={16}>
      <Tooltip text="I am a tooltip" {...args}>
        <TooltipTarget>Tooltip</TooltipTarget>
      </Tooltip>
    </Flex>

    <br />
  </>
);

export const left = Template.bind({});
left.args = {
  position: "left",
  background: "00adb5",
};

export const right = Template.bind({});
right.args = {
  position: "right",
  background: "00adb5",
};

export const up = Template.bind({});
up.args = {
  position: "up",
  background: "00adb5",
};

export const bottom = Template.bind({});
bottom.args = {
  position: "bottom",
  background: "00adb5",
};
