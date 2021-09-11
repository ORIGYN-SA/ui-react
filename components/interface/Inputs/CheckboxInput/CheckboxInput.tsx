import React, { useState, useMemo } from "react";
import styled from "styled-components";
import CheckboxUncheckedIcon from "../../../icons/CheckboxUnchecked";
import CheckboxCheckedIcon from "../../../icons/CheckboxChecked";

export type CheckboxInputProps = {
  label?: string;
  isChecked?: boolean;
  changeValue?: (c: boolean) => void;
  name: string;
  radio?: boolean;
};

const StyledCheckboxInput = styled.input`
  ${() => `
  display: none;
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
  
  &.active {
    opacity: 1;
    &:after {
      opacity: 1;
    }
  }
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

// TODO: refactoring
const CheckboxInput = ({
  label,
  name,
  isChecked,
  changeValue,
  radio,
}: CheckboxInputProps) => {
  const [isCheckedS, setIsCheckedS] = useState(false);
  const checked = isChecked !== undefined ? isChecked : isCheckedS;

  return (
    <>
      <StyledLabel htmlFor={name}>
        {!radio ? (
          checked ? (
            <CheckboxCheckedIcon />
          ) : (
            <CheckboxUncheckedIcon />
          )
        ) : (
          <StyledCheckboxIcon className={checked ? "active" : ""} />
        )}
        <StyledCheckboxInput
          onClick={() =>
            changeValue ? changeValue(!checked) : setIsCheckedS(!checked)
          }
          type="checkbox"
          id={name}
          name={name}
        />
        {label}
      </StyledLabel>
    </>
  );
};

export default CheckboxInput;
