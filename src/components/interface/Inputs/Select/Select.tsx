import React, { ChangeEventHandler } from "react";
import Select from "react-select";
import styled from "styled-components";
import Flex from "../../../layout/Flex";
import {inputSizes} from "../TextInput/TextInput";

export type CustomSelectProps = {
  label?: string;
  name?: string;
  selectedOption?: string;
  placeholder?: string;
  handleChange?: (value: any) => void;
  error?: boolean;
  height?: string;
  inputSize?: 'small' | 'medium' | 'large';
  options?: {
    value?: any;
    label?: any;
  }[];
};

const StyledSelect = styled(Select)<{inputSize?: string}>`
  .react-select__control {
    min-height: auto;
    ${({inputSize = "large"}) => inputSizes[inputSize]};
    background: ${({theme}) => theme?.colors?.BLACK};
  }
  .react-select__control--is-focused {
    border-radius: 12px 12px 0 0;
  }
  .react-select__input-container {
    margin: 0;
    padding: 0;
  }
  .react-select__value-container {
    padding: 0;
  }
  .react-select__single-value {
    color: ${({theme}) => theme?.colors?.WHITE};
  }
  .react-select__indicator {
    padding: 0;
  }
  .react-select__menu {
    margin: 0;
    padding: 8px;
    border-radius: 0 0 12px 12px;
    background: ${({theme}) => theme?.colors?.BLACK};
    color: ${({theme}) => theme?.colors?.WHITE};
  }
  
  .react-select__option {
    border-radius: 8px;
    :hover {
      background: ${({theme}) => theme?.colors?.DARK_GREY};
    }
  }
  .react-select__option--is-selected, .react-select__option--is-focused {
    background: ${({theme}) => theme?.colors?.DARK_GREY};
  }
  
`;

const StyledLabel = styled.label`
  ${() => `
  font-weight: 600;
  font-size: 15px;
  line-height: 24px;
`}
`;

const CustomSelect = ({
  selectedOption,
  handleChange,
  label,
  name,
  options,
  ...rest
}: CustomSelectProps) => {
  return (
    <Flex flexFlow="column" fullWidth>
      <StyledLabel htmlFor={name}>{label}</StyledLabel>
      <StyledSelect
        value={selectedOption}
        onChange={(event) => {
          handleChange && handleChange(event);
        }}
        options={options}
        name={name}
        className="react-select-container"
        classNamePrefix="react-select"
        components={{
          IndicatorSeparator: () => null
        }}
        {...rest}
      />
    </Flex>
  );
};

export default CustomSelect;
