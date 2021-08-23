import React, {useState} from "react"
import styled from 'styled-components';
import Flex from '../../layout/Flex';
import Card from '../Card';
import FilterIcon from '../../icons/Filter';
import ArrowDownIcon from "../../icons/ArrowDown";
import SearchInput from "../SearchInput";
import CheckboxInput from '../CheckboxInput';
import HR from '../HR';

export type FiltersProps = {
  title: string;
}

const StyledFilter = styled(Flex)`${({ theme }) => `
  background: #FFFFFF;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
  height: 64px;
  padding: 0 32px;
`}`;

const StyledFilterDropdown = styled(Card)`
  position: absolute;
  right: 0;
  top: 41px;
  width: 700px;
  padding: 30px 25px;
`;

const Filters = ({title}: FiltersProps) => {
  const [isFilterShown, setIsFilterShown] = useState(false);

  return (
    <StyledFilter align="center" justify="space-between">
      <h3>{title}</h3>
      <Flex gap={50} align="center">
        <Flex relative>
          <Flex  gap={10} align="center" onClick={() => setIsFilterShown(!isFilterShown)}><FilterIcon /> Filter</Flex>
          {isFilterShown && (
            <StyledFilterDropdown flexFlow="column" gap={10}>
              <Flex align="center" gap={50}>
                <h3>Status</h3>
                <CheckboxInput radio label="On sale" name="onSale" />
              </Flex>
              <HR marginTop={10} marginBottom={10} />
              <Flex align="center" gap={50}>
                <h3>Seller</h3>
                <CheckboxInput radio label="Gallery" name="onSale" />
                <CheckboxInput radio label="Private" name="onSale" />
              </Flex>
              <HR marginTop={10} marginBottom={10} />
              <Flex>
                <h3>Price</h3>
              </Flex>
              <HR marginTop={10} marginBottom={10} />
            </StyledFilterDropdown>
          )}</Flex>
        <Flex gap={10} align="center">Newest <ArrowDownIcon /></Flex>
        <SearchInput onSearch={()=>{}} label="Search" name="Filter Search"/>
      </Flex>
    </StyledFilter>
  )
}

export default Filters;
