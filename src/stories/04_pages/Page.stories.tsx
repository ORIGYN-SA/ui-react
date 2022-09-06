import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Header from "../../components/interface/Header";
import BreadCrumbs from '../../components/interface/BreadCrumbs';
import TabContent from '../../components/interface/TabContent';
import Filters from '../../components/interface/Filters'
import ProductCard from '../../components/interface/ProductCard'
import Container from '../../components/layout/Container';
import Flex from '../../components/layout/Flex';
import Grid from '../../components/layout/Grid';

export default {
  title: "Pages/Profile Page",
} as Meta;

const Template: Story = (args) => (
  <div>
    <TabContent
      tabs={[{title: 'Digital Twin'}, {title: 'Selling'}, {title: 'Buying'}, {title: 'Transaction'}]}
      content={[
        <Container padding="0 30px" size="lg">
          <BreadCrumbs data={[{title: "My portfolio", link: "#"}, {title: "Digital twins", link: "#"}]} />
          <Flex flexFlow="column" gap={14}>
            <h1>All Artworks</h1>
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
