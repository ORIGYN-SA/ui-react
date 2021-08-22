import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Grid, { GridProps } from "./Grid";

export default {
    title: "Components/Layout/Grid",
    component: Grid,
} as Meta;

const Template: Story<GridProps> = (args) => <Grid {...args}>{(() => {
    const columns = [];
    for(let i = 0; args.columns && i< args.columns; i+=1){
        columns.push(<div style={{backgroundColor: "#aaa"}}>Column {i + 1}</div>)
    }
    return columns;
})()}</Grid>;

export const Default = Template.bind({});
Default.args = {columns: 2, gap: 20};
