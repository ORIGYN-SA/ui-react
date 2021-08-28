import React from "react"
import styled from 'styled-components';

export type TableProps = {

}

const StyledTable = styled.table<TableProps>`${({ theme }) => `

`}`;

export const Table = styled.table<TableProps>`${({ theme }) => `

  thead {
    td {
      font-weight: 600;
      font-size: 13px;
      line-height: 160%;
    }
  }
`}`;

export default StyledTable;
