import React from "react";
import styled from "styled-components";
import Flex from "../../../layout/Flex";

export interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement>{
  label?: string;
  name: string;
  resize?: boolean;
}

const StyledTextArea = styled.textarea<{ resize?: boolean }>`
  ${({ theme, value, resize }) => `
  padding: 13px 13px 13px 20px;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  border: 1px solid ${value ? theme.colors.BLACK : theme.colors.LIGHT_GRAY};
  box-sizing: border-box;
  border-radius: 2px;
  resize: ${resize && 'none'};
  ::placeholder {
    color: ${theme.colors.LIGHT_GRAY};
  }

  &:focus{
    outline: none;
    border-color: ${theme.colors.BLACK};
  }
`}
`;

const StyledLabel = styled.label`
  ${() => `
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
`}
`;

const ErrorMessage = styled.div`
  ${({ theme }) => `
  font-size: 14px;
  line-height: 22px;
  margin-top: 6px;
  color: ${theme.colors.ERROR};
`}
`;

const TextArea = ({
  label,
  name,
  resize,
  ...props
}: TextAreaProps) => {
  return (
    <Flex flexFlow="column" fullWidth>
      <StyledLabel htmlFor={name}>{label}</StyledLabel>
      <StyledTextArea
        {...props}
        resize={resize}
      />
    </Flex>
  );
};

export default TextArea;
