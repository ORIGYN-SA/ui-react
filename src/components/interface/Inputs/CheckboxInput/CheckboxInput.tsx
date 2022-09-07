import React, { useState, useMemo } from "react";
import styled from "styled-components";
import CheckboxUncheckedIcon from "../../../icons/CheckboxUnchecked";
import CheckboxCheckedIcon from "../../../icons/CheckboxChecked";
import CheckboxUncheckedDisabledIcon from "../../../icons/CheckboxUncheckedDisabled";
import CheckboxCheckedDisabledIcon from "../../../icons/CheckboxCheckedDisabled";
import {disabled} from "./CheckboxInput.stories";

export interface CheckboxInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name: string;
  radio?: boolean;
}

const StyledCheckboxInput = styled.input`
  ${() => `
  display: none;
  
  &:checked + div {
    background-color: #151515;
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
  border: 1px solid #E3E3E3;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  
  &:after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 8px;
    height: 8px;
    background-color: #fefefe;
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
            {
              props.disabled ? (
                <>
                  <CheckboxCheckedDisabledIcon />
                  <CheckboxUncheckedDisabledIcon />
                </>
              ) : (
                <>
                  <CheckboxCheckedIcon />
                  <CheckboxUncheckedIcon />
                </>
              )
            }
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
