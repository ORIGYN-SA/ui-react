import React from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Flex from "../../layout/Flex";
export type DatePickerProps = {
  name?: string;
  label?: string;
  placeholderText?: string;
  showMonthsPicker?: boolean;
  dateFormat?: string;
  showMonthYearPicker?: boolean;
  hideHeader?: boolean;
  showYearPicker?: boolean;
  selected: (Date & (Date | string)) | null;
  onChange: (d: (Date & (Date | string)) | null) => void;
};

const StyledDatePicker = styled(DatePicker)<DatePickerProps>`
  ${({ showYearPicker }) => `
    height: 50px;
    width: 140px;
    padding: 14px 33px 12px 16px;
    background: #FFFFFF;
    border: 1px solid rgba(0, 0, 0, 0.2);
    box-sizing: border-box;
    border-radius: 2px;
    
`}
`;
const StyledLabel = styled.label`
  ${() => `
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
`}
`;

const Date = ({ name, label, ...args }: DatePickerProps) => {
  return (
    <Flex flexFlow="column">
      {label && <StyledLabel htmlFor={name}>{label}</StyledLabel>}
      <StyledDatePicker {...args} />
    </Flex>
  );
};

export default Date;
