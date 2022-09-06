import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Chip, { ChipProps } from "./Chip";
import Flex from "../../layout/Flex";
import Transaction from "../../icons/Transaction";
import Close from "../../icons/Close";

export default {
  title: "Components/Interface/Chip/All stories",
  component: Chip,
} as Meta;

const Template: Story<ChipProps> = (args) => <Flex gap={10}>
  <Chip {...args} >Enabled</Chip>
  <Chip {...args} >Enabled<Close width={16} height={16} /></Chip>
  <Chip {...args} ><Transaction width={16} height={16} />Enabled</Chip>
  <Chip {...args} ><Transaction width={16} height={16} />Enabled<Close width={16} height={16} /></Chip>
</Flex>;

export const TransparentSmall = Template.bind({});
TransparentSmall.args = {
  size: "small",
};

export const TransparentMedium = Template.bind({});
TransparentMedium.args = {
  size: "medium",
};

export const OutlineSmall = Template.bind({});
OutlineSmall.args = {
  size: "small",
  type: "outlined"
};

export const OutlineMedium = Template.bind({});
OutlineMedium.args = {
  size: "medium",
  type: "outlined"
};

export const FilledSmall = Template.bind({});
FilledSmall.args = {
  size: "small",
  type: "filled"
};

export const FilledMedium = Template.bind({});
FilledMedium.args = {
  size: "medium",
  type: "filled"
};
