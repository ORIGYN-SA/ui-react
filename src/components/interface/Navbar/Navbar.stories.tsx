import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Navbar from "./Navbar";
import Home from "./MockSlides/Home";
import Governance from "./MockSlides/Governance";
import Wallet from "./MockSlides/Wallet";
import { CustomLink } from "./Navbar";
import HomeIcon from "../../../components/icons/home";
import GovernanceIcon from "../../../components/icons/governance";
import ThemeIcon from "../../../components/icons/theme";
import WalletIcon from "../../../components/icons/wallet";

export default {
  title: "Components/Interface/Navbar/All stories",
  component: Navbar,
} as Meta;

const Template: Story = (args: any) => {
  let component;
  switch (window.location.pathname) {
    case "/home":
      component = <Home />;
      break;
    case "/governance":
      component = <Governance />;
      break;
    case "/team":
      component = <Wallet />;
      break;
  }

  return (
    <>
      <Navbar>

         

        <CustomLink href="/home">
          <HomeIcon />
        </CustomLink>


        <CustomLink href="/governance">
          <GovernanceIcon />
        </CustomLink>


        <CustomLink href="/wallet">
          <WalletIcon />
        </CustomLink>
      </Navbar>

      <div className="container">{component}</div>
    </>
  );
};

export const basic = Template.bind({});
basic.args = {};
