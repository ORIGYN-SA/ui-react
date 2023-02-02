import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Navbar from "./Navbar";
import Home from "./MockSlides/Home";
import Governance from "./MockSlides/Governance";
import Wallet from "./MockSlides/Wallet";
import HomeIcon from "../../../components/icons/home";
import GovernanceIcon from "../../../components/icons/governance";
import ThemeIcon from "../../../components/icons/theme";
import WalletIcon from "../../../components/icons/wallet";

export default {
  title: "Components/Interface/Navbar/All stories",
  component: Navbar,
} as Meta;

const Template: Story = (args: any) => {

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "1050px",
        backgroundColor: "#d3d3d3",
      }}
    >
      <Navbar navItems={[
        {
          href: 'url',
          icon: HomeIcon
        },
        {
          href: 'url',
          icon: GovernanceIcon
        },
        {
          href: 'url',
          icon: WalletIcon
        },
      ]} />
    </div>
  );
};

export const basic = Template.bind({});
basic.args = {};
