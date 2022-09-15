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

const Template: Story = (args) => (
  <>
    <Flex gap={16}>
      <Tooltip text="I am a tooltip" position="left" background="00adb5">
        <TooltipTarget>Left</TooltipTarget>
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

export const primaryDisabled = Template.bind({});
primaryDisabled.args = { disabled: true };

export const small = Template.bind({});
small.args = {
  btnType: "small",
};

export const medium = Template.bind({});
medium.args = {
  btnType: "medium",
};

export const large = Template.bind({});
large.args = {
  btnType: "large",
};

export const smallTextButton = Template.bind({});
smallTextButton.args = {
  btnType: "small",
  textButton: true,
};

export const mediumTextButton = Template.bind({});
mediumTextButton.args = {
  btnType: "medium",
  textButton: true,
};

export const largeTextButton = Template.bind({});
largeTextButton.args = {
  btnType: "large",
  textButton: true,
};
