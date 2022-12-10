import React from "react";
import styled from "styled-components";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Flex from "../../../layout/Flex";
import {inputSizes} from "../TextInput/TextInput";
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
  inputSize?: string;
  error?: string;
};

const StyledDatePicker = styled(ReactDatePicker)<DatePickerProps>`
    ${({inputSize = "large"}) => inputSizes[inputSize]};
    background: ${({theme}) => theme.colors.BACKGROUND};
    color: ${({theme}) => theme.colors.TEXT};
    border: 1px solid ${({error, theme}) => error ? theme.colors.ERROR : theme.colors.BORDER};
`;
const StyledLabel = styled.label`
  ${() => `
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
`}
`;

const DatePicker = ({ name, label, ...args }: DatePickerProps) => {
  return (
    <Flex flexFlow="column">
      {label && <StyledLabel htmlFor={name}>{label}</StyledLabel>}
      <StyledDatePicker {...args} />
    </Flex>
  );
};

export default DatePicker;
