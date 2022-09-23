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
import "./styles.css";

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
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "1200px",
        backgroundColor: "#d3d3d3",
      }}
    >
      <Navbar>
        {/* will add icons svg's instead of text */}

        <CustomLink className="item-home" href="/home">
          <p>Home</p>
        </CustomLink>

        <CustomLink className="item" href="/governance">
          <p>Gov</p>
        </CustomLink>

        <CustomLink className="item" href="/wallet">
          <p>Wallet</p>
        </CustomLink>
      </Navbar>

      <div className="container">{component}</div>
    </div>
  );
};

export const basic = Template.bind({});
basic.args = {};
