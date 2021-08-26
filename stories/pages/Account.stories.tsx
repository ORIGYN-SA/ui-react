import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Header from "../../components/interface/Header";
import BreadCrumbs from "../../components/interface/BreadCrumbs";
import { TabContentVertical } from "../../components/interface/TabContent";
import Container from "../../components/layout/Container";
import Flex from "../../components/layout/Flex";

export default {
  title: "Pages/Account Page",
} as Meta;

const Template: Story = (args) => (
  <div>
    <Header isLoggedIn />
    <Container padding="0 33px">
      <BreadCrumbs
        data={[
          { title: "Profile", link: "#" },
          { title: "My Account", link: "#" },
        ]}
      />
      <Flex align="center">
        <h2>My Account</h2>
      </Flex>
      <TabContentVertical
        tabs={[
          { title: "Profile" },
          { title: "Funding" },
          { title: "Transaction History" },
          { title: "Privacy Settings" },
          { title: "Notifications" },
          { title: "Contact Us" },
        ]}
        content={[
          <div>Content 1</div>,
          <div>Content 2</div>,
          <div>Content 3</div>,
          <div>Content 4</div>,
          <div>Content 5</div>,
          <div>Content 6</div>,
        ]}
      />
    </Container>
  </div>
);

export const Default = Template.bind({});
Default.args = { size: "md" };
