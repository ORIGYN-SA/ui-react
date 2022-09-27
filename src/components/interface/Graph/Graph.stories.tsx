import React, { useState } from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { Graph } from "./Graph";
import mockData from "./mockData.json";

export default {
  title: "Components/Interface/Graph",
  component: Graph,
} as Meta;

const Template: Story<any> = (args) => {
  return (
    <div style={{ padding: 20, backgroundColor: "white" }}>
      <Graph {...args} data={mockData} token="OGY" width="700px" />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  width: 700,
  height: 300,
};
