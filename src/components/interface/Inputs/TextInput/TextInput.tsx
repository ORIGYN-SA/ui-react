import React from "react";
import styled from "styled-components";
import Flex from "../../../layout/Flex";
import ErrorIcon from "../../../icons/Error";

export interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
};

const StyledTextInput = styled.input<{error: boolean}>`
  ${({theme, value, error}) => `
    padding: 0 16px;
    gap: 10px;
    min-width: 315px;
    height: 56px;
    background: #FEFEFE;
    
    border: 1px solid ${error ? theme.colors.ERROR : "#E3E3E3"};
    border-radius: 12px;
    
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.2px;
    color: ${error ? theme.colors.ERROR : "#5F5F5F"};
  
  ::placeholder {
    color: #5F5F5F;
  }

  &:focus{
    outline: none;
    border-color: ${theme.colors.BLACK};
  }
`}`;

const ErrorMessage = styled.div`
  ${({theme}) => `
  font-weight: 400;
  font-size: 11px;
  line-height: 16px;
  margin-top: 6px;
  color: ${theme.colors.ERROR};
  display: flex;
  align-tems: center;
  gap: 6px;
`}
`;

const Label = styled.label`
  font-weight: 600;
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 8px;
`

const TextInput = ({ label, error, ...props }: TextInputProps) => {
  return (
    <Flex flexFlow="column" fullWidth>
      {label ? <Label htmlFor={props.id}>{label}</Label> : null }
      <StyledTextInput
        error={!!error}
        {...props}
      />
      <ErrorMessage>
        {error && (
          <>
            <ErrorIcon fill="#B5010A" />
            {error}
          </>
        )}
      </ErrorMessage>
    </Flex>
  );
};

export default TextInput;
