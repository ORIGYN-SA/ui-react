import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Pagination from "./Pagination";
import ArrowRight from "../../icons/ArrowRight";
import Flex from "../../layout/Flex";

export default {
  title: "Components/Interface/Pagination/All stories",
  component: Pagination,
} as Meta;

const Template: Story = (args) => (
  <>
    <Pagination {...args} />
  </>
);

export const basic = Template.bind({});
basic.args = {
  pageCount: 10,
};
