import React from "react";
import styled from "styled-components";
import Flex from "../../layout/Flex";
import SearchIcon from "../../icons/Search";

export type SearchInputProps = {
  label: string;
  name: string;
  onSearch: Function;
};

const StyledSearchInput = styled.input`
  ${() => `
  padding: 3px 0;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  border: none;
  background-color: transparent;
  box-sizing: border-box;
  
  &:focus{
    outline: none;
  }
`}
`;

const StyledSearchInputWrap = styled(Flex)`
  ${() => `
  border-bottom: 1px solid #000000;
  padding: 0 10px;
`}
`;

const SearchInput = ({ label, name, onSearch }: SearchInputProps) => {
  return (
    <StyledSearchInputWrap align="center" justify="space-between">
      <StyledSearchInput
        placeholder={label}
        type="text"
        id={name}
        name={name}
      />
      <SearchIcon onClick={onSearch} />
    </StyledSearchInputWrap>
  );
};

export default SearchInput;
