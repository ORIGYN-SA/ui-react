import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Grid from "../../layout/Grid";
import ProductCard, { ProductCardProps } from "./ProductCard";

export default {
  title: "Components/Interface/ProductCard",
  component: ProductCard,
} as Meta;

const Template: Story<ProductCardProps> = (args) => (
  <Grid mdColumns={2} gap={20}>
    <ProductCard {...args} />
    <ProductCard {...args} />
    <ProductCard {...args} />
    <ProductCard {...args} />
    <ProductCard {...args} />
  </Grid>
);

export const Default = Template.bind({});
Default.args = {};
