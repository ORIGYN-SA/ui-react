import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Filters, { FiltersProps } from "./Filters";

export default {
  title: "Components/Interface/Filters",
  component: Filters,
} as Meta;

const Template: Story<FiltersProps> = (args) => <Filters {...args} />;

export const Default = Template.bind({});
Default.args = { title: "All Artworks" };
