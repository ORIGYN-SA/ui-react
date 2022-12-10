import React from "react";
import styled from "styled-components";
import Flex from "../../../layout/Flex";
import {inputSizes} from "../TextInput/TextInput";

export interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement>{
  label?: string;
  name: string;
  resize?: boolean;
  inputSize?: 'small' | 'medium' | 'large';
}

const StyledTextArea = styled.textarea<{ resize?: boolean, inputSize?:string }>`
  ${({inputSize = "large"}) => inputSizes[inputSize]};
  height: auto;
  
  ${({ theme, resize }) => `
  padding: 16px;
  border: 1px solid ${theme.colors.DARK_GREY};
  box-sizing: border-box;
  resize: ${resize && 'none'};
  background: ${theme.colors.BLACK};
  color: ${theme.colors.WHITE};
  
  ::placeholder {
    color: ${theme.colors.WHITE};
  }

  &:focus{
    outline: none;
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

const TextArea = ({
  label,
  resize,
  ...props
}: TextAreaProps) => {
  return (
    <Flex flexFlow="column" fullWidth>
      <StyledLabel htmlFor={props.id}>{label}</StyledLabel>
      <StyledTextArea
        {...props}
        resize={resize}
      />
    </Flex>
  );
};

export default TextArea;
