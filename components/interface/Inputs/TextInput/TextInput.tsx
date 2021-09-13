import React, {ChangeEventHandler} from "react";
import styled from "styled-components";
import Flex from "../../../layout/Flex";

export type TextInputProps = {
  label: string;
  name: string;
  error?: string;
  placeholder?: string;
  value?: string;
  onChange?: ChangeEventHandler;
};

const StyledTextInput = styled.input<{error: boolean}>`
  ${({theme, value, error}) => `
  padding: 13px 13px 13px 20px;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  border: 1px solid ${ error ? theme.colors.ERROR : (value ? theme.colors.BLACK : theme.colors.LIGHT_GRAY)};
  box-sizing: border-box;
  border-radius: 2px;
  
  ::placeholder {
    color: ${theme.colors.LIGHT_GRAY};
  }

  &:focus{
    outline: none;
    border-color: ${theme.colors.BLACK};
  }
`}`;

const StyledLabel = styled.label`
  ${() => `
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
`}
`;

const ErrorMessage = styled.div`
  ${({theme}) => `
  font-size: 14px;
  line-height: 22px;
  margin-top: 6px;
  color: ${theme.colors.ERROR};
`}
`;

const TextInput = ({ label, name, error, placeholder, value, onChange }: TextInputProps) => {
  return (
    <Flex flexFlow="column" fullWidth>
      <StyledLabel htmlFor={name}>{label}</StyledLabel>
      <StyledTextInput
        type="text"
        id={name}
        name={name}
        value={value}
        error={!!error}
        onChange={onChange}
        placeholder={placeholder}
      />
      <ErrorMessage>
        {error}
      </ErrorMessage>
    </Flex>
  );
};

export default TextInput;
