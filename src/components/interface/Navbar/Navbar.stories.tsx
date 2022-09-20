import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Navbar from "./Navbar";
import About from "./MockSlides/About";
import Origyn from "./MockSlides/Origyn";
import Team from "./MockSlides/Team";
import { CustomLink } from "./Navbar";

export default {
  title: "Components/Interface/Navbar/All stories",
  component: Navbar,
} as Meta;

const Template: Story = (args: any) => {
  let component;
  switch (window.location.pathname) {
    case "/about":
      component = <About />;
      break;
    case "/origyn":
      component = <Origyn />;
      break;
    case "/team":
      component = <Team />;
      break;
  }

  return (
    <>
      <Navbar>
        <CustomLink href="/about">About</CustomLink>
        <CustomLink href="/origyn">Origyn</CustomLink>
        <CustomLink href="/team">Team</CustomLink>
      </Navbar>
      <div className="container">{component}</div>
    </>
  );
};

export const basic = Template.bind({});
basic.args = {};
