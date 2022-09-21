import React, { useState } from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { LineChart } from "./LineChart";

export default {
  title: "Components/Interface/LineGraph",
  component: LineChart,
} as Meta;

const Template: Story<any> = (args) => {
  var data = {
    "Apr 13": 10,
    "Apr 20": 7,
    "Apr 23": 21,
    "Apr 27": 25,
    "May 4": 30,
    "May 6": 24,
    "May 11": 21,
  };
  return (
    <div style={{ padding: 20, backgroundColor: "white" }}>
      <LineChart {...args} data={data} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  width: 700,
  height: 300,
};
