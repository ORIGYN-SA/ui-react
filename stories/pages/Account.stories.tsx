import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import styled from "styled-components";
import Header from "../../components/interface/Header";
import BreadCrumbs from "../../components/interface/BreadCrumbs";
import TextInput from "../../components/interface/TextInput";
import DatePicker from "../../components/interface/DatePicker";
import Button from "../../components/interface/Button";

import { TabContentVertical } from "../../components/interface/TabContent";
import Container from "../../components/layout/Container";
import Flex from "../../components/layout/Flex";
import Grid from "../../components/layout/Grid";

export default {
  title: "Pages/Account Page",
} as Meta;

const StyledTabContent = styled.div`
  width: 100%;
  height: 1px;
  background-color: #000;
  margin-top: 75px;
  margin-bottom: 30px;
`;

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
          <AccountProfile />,
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

const AccountProfile = () => {
  return (
    <Container size="full">
      <Grid columns={2} gap={20}>
        <h4>Profile</h4>
        <br />
        <Flex flexFlow="column" fullHeight gap={10}>
          <TextInput label="Display Name" name="name" />
        </Flex>
      </Grid>
      <Grid columns={2} gap={20}>
        <h4>Personal Information</h4>
        <br />
        <Flex flexFlow="row" fullHeight gap={10}>
          <TextInput label="FIrst Name" name="firstName" />
        </Flex>
        <Flex flexFlow="row" fullHeight gap={10}>
          <TextInput label="Last Name" name="lastName" />
        </Flex>
        <Flex flexFlow="row" fullHeight gap={10}>
          <TextInput label="Email Address" name="email" />
        </Flex>
        <Flex flexFlow="row" fullHeight gap={10}>
          <TextInput label="Phone Number" name="phone" />
        </Flex>
        <Flex align="flex-end">
          <DatePicker
            placeholderText="DD"
            showMonthsPicker={true}
            dateFormat="dd"
            selected={null}
            onChange={() => undefined}
            label="Date of birth"
          />
          <DatePicker
            placeholderText="MM"
            showMonthsPicker={true}
            dateFormat="MM"
            showMonthYearPicker={true}
            hideHeader={true}
            selected={null}
            onChange={() => undefined}
          />
          <DatePicker
            dateFormat="yyyy"
            showYearPicker={true}
            placeholderText="YYYY"
            selected={null}
            onChange={() => undefined}
          />
        </Flex>
      </Grid>
      <Grid columns={2} gap={20}>
        <h4>Address</h4>
        <br />
        <Flex flexFlow="column" gap={20}>
          <Flex flexFlow="column" fullHeight gap={10}>
            <TextInput label="Country" name="country" />
          </Flex>
          <Grid columns={2}>
            <Flex flexFlow="column" fullHeight gap={10}>
              <TextInput label="Town or City" name="city" />
            </Flex>
            <Flex flexFlow="column" fullHeight gap={10}>
              <TextInput label="ZIP code" name="code" />
            </Flex>
          </Grid>
          <Flex flexFlow="column" fullHeight gap={10}>
            <TextInput label="Street address" name="address" />
          </Flex>
        </Flex>
      </Grid>
      <StyledTabContent />
      <Button primary={false}>Save</Button>
    </Container>
  );
};

export const Default = Template.bind({});
Default.args = { size: "md" };
