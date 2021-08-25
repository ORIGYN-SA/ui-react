import React, {useState} from "react"
import styled from 'styled-components';
import CheckboxUncheckedIcon from "../../icons/CheckboxUnchecked";
import CheckboxCheckedIcon from "../../icons/CheckboxChecked";

export type CheckboxInputProps = {
  label: string;
  name: string;
  radio?: boolean;
}

const StyledCheckboxInput = styled.input`${({theme}) => `
  display: none;
`}`;

const StyledCheckboxIcon = styled.div`${({theme}) => `
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
`}`;

const StyledLabel = styled.label`${({theme}) => `
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  line-height: 24px;
  cursor: pointer;
`}`

const TextInput = ({label, name, radio}: CheckboxInputProps) => {
  const [isChecked, setIsChecked] = useState(false);

  return <>
    <StyledLabel htmlFor={name}>
      {
        radio ? (
          isChecked ? <CheckboxUncheckedIcon /> : <CheckboxCheckedIcon />
        ) : (
          <StyledCheckboxIcon className={isChecked ? 'active' : ''} />
        )
      }
      <StyledCheckboxInput
        onChange={() => setIsChecked(!isChecked)}
        type="radio"
        id={name}
        name={name}
      />
      {label}
    </StyledLabel>
  </>
}

export default TextInput;