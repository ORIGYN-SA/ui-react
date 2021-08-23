import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Header from "../interface/Header";
import BreadCrumbs from '../interface/BreadCrumbs';
import TabContent from '../interface/TabContent';
import Filters from '../interface/Filters'
import ProductCard from '../interface/ProductCard'
import Container from '../layout/Container';
import Flex from '../layout/Flex';
import Grid from '../layout/Grid';

export default {
  title: "Pages/Profile Page",
} as Meta;

const Template: Story = (args) => (
  <div>
    <Header isLoggedIn />
    <TabContent
      tabs={[{title: 'Digital Twin'}, {title: 'Selling'}, {title: 'Buying'}, {title: 'Transaction'}]}
      content={[
        <Container padding="0 30px" size="lg">
          <BreadCrumbs data={[{title: "My portfolio", link: "#"}, {title: "Digital twins", link: "#"}]} />
          <Flex flexFlow="column" gap={14}>
            <Filters title="Digital twins" />
            <Grid columns={3} gap={40}>
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </Grid>
          </Flex>
        </Container>,
        <div>Content 2</div>, <div>Content 3</div>, <div>Content 4</div>]}
    />
  </div>
);

export const Default = Template.bind({});
Default.args = { size: "md" };
