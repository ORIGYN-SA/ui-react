import React from "react"
import styled from 'styled-components';

export type TableProps = {

}

const StyledTable = styled.table<TableProps>`${({ theme }) => `

`}`;

export const Table = styled.table<TableProps>`${({ theme }) => `

`}`;

export const TableHead = styled.thead`${({ theme }) => `
  td {
    font-weight: 600;
    font-size: 13px;
    line-height: 160%;
  }
`}`;

export const TableRow = styled.tr`${({ theme }) => `

`}`;

export const TableCell = styled.td`${({ theme }) => `

`}`;

export default StyledTable;
