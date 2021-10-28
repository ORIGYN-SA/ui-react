import React, { useState, useMemo } from "react";
import styled from "styled-components";
import CheckboxUncheckedIcon from "../../../icons/CheckboxUnchecked";
import CheckboxCheckedIcon from "../../../icons/CheckboxChecked";

export interface CheckboxInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  isChecked?: boolean;
  name: string;
  radio?: boolean;
}

const StyledCheckboxInput = styled.input`
  ${() => `
  display: none;
  
  &:checked + div {
    opacity: 1;
    &:after {
      opacity: 1;
    }
  }
  & + svg {
    display: none;
  }
  
  &:checked + svg {
    display: block;
  }
  &:checked + svg + svg {
    display: none;
  }
`}
`;

const StyledCheckboxIcon = styled.div`
  ${({ theme }) => `
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid ${theme.colors.BLACK};
  border-radius: 50%;
  width: 20px;
  height: 20px;
  opacity: 0.5;
  
  &:after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 10px;
    height: 10px;
    background-color: ${theme.colors.BLACK};
    opacity: 0;
  }
`}
`;

const StyledLabel = styled.label`
  ${() => `
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  line-height: 24px;
  cursor: pointer;
`}
`;

const CheckboxInput = ({
  label,
  name,
  isChecked,
  radio,
  id,
  ...props
}: CheckboxInputProps) => {

  return (
    <>
      <StyledLabel htmlFor={id}>
        <StyledCheckboxInput
          type="checkbox"
          id={id}
          {...props}
        />

        {!radio ? (
          <>
            <CheckboxCheckedIcon />
            <CheckboxUncheckedIcon />
          </>
        ) : (
          <StyledCheckboxIcon />
        )}
        <span>{label}</span>
      </StyledLabel>
    </>
  );
};

export default CheckboxInput;