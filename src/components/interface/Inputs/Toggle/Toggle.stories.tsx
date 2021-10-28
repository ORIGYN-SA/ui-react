import React, { useState } from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Grid from "../../../layout/Grid";
import Toggle from "./Toggle";

export default {
  title: "Components/Interface/Inputs/Toggle/All stories",
  component: Toggle,
} as Meta;

const Template: Story = (args) => {
  const [checked, setChecked] = useState(false);
  return (
    <Grid gap={20} columns={5}>
      <Toggle checked={checked} handleToggle={setChecked} disabled={false} />
    </Grid>
  );
};

export const Default = Template.bind({});
Default.args = {
  name: "input",
  label: "Label text",
};
