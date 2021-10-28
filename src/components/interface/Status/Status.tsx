import React from "react";
import styles from "styled-components";
import {theme} from "../../../utils";

type TStatus = keyof typeof theme.colors;

export interface StatusProps {
  status?: TStatus;
  label: string;
  width?: string;
}

export const SStatus = styles.b<{ status?: TStatus, width?: string }>`
    ${({theme, status, width}) => `
        display: inline-block;
        width: ${width ? width : 'auto'};
        background-color: ${theme.colors[status]};
        color: white;
        padding: 5px;
        text-align: center;
    `}
`;

const Status: React.FC<StatusProps> = ({label, children, ...props}) => {
  return (
    <SStatus {...props}>
      {label || children}
    </SStatus>
  );
};

export default Status;
