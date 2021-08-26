import React from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
export type DatePickerProps = {};

const StyledDatePicker = styled(DatePicker)<DatePickerProps>`
  ${({ showYearPicker }) => `
    height: 50px;
    width: ${showYearPicker ? "100px" : "80px"};
    padding: 14px 33px 12px 16px;
    background: #FFFFFF;
    border: 1px solid rgba(0, 0, 0, 0.2);
    box-sizing: border-box;
    border-radius: 2px;
    
`}
`;

export default StyledDatePicker;
