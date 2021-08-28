import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { Table, TableCell, TableHead, TableRow, TableProps } from "./Table";

export default {
  title: "Components/Interface/Table",
  component: Table,
} as Meta;

const Template: Story<TableProps> = (args) => (
  <Table>
    <TableHead>
      <TableRow>
        <TableCell>
          Cell 1
        </TableCell>
        <TableCell>
          Cell 2
        </TableCell>
        <TableCell>
          Cell 3
        </TableCell>
      </TableRow>
    </TableHead>
  </Table>
);

export const Default = Template.bind({});
Default.args = {  };
