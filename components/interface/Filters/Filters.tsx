import React, { useState } from "react";
import styled from "styled-components";
import Flex from "../../layout/Flex";
import Card from "../Card";
import FilterIcon from "../../icons/Filter";
import ArrowDownIcon from "../../icons/ArrowDown";
import CheckboxInput from "../Inputs/CheckboxInput";
import HR from "../HR";

export type FiltersProps = {};

const StyledFilter = styled(Flex)`
  ${() => `
  background: #FFFFFF;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
  height: 64px;
  padding: 0 32px;
`}`;

const StyledSortDropdown = styled(Card)`
  position: absolute;
  left: 0;
  top: 41px;
  width: auto;
  padding: 30px 25px;
`;

const StyledFilterDropdown = styled(Card)`
  position: absolute;
  left: 0;
  top: 41px;
  width: 700px;
  padding: 30px 25px;
`;

const Filters = ({}: FiltersProps) => {
  const [isFilterShown, setIsFilterShown] = useState(false);
  const [isSortingShown, setIsSortingShown] = useState(false);

  return (
    <StyledFilter align="center" justify="space-between">
      <Flex gap={50} align="center">
        <Flex gap={10} align="center" relative onClick={() => setIsSortingShown(!isSortingShown)}>
          Newest <ArrowDownIcon />
          {isSortingShown && (
            <StyledSortDropdown flexFlow="column" gap={10}>
              <p>Newest</p>
              <p>Latest</p>
            </StyledSortDropdown>
          )}
        </Flex>
        <Flex relative>
          <Flex
            gap={10}
            align="center"
            onClick={() => setIsFilterShown(!isFilterShown)}
          >
            <FilterIcon /> Filter
          </Flex>
          {isFilterShown && (
            <StyledFilterDropdown flexFlow="column" gap={10}>
              <Flex align="center" gap={50}>
                <h3>Status</h3>
                <CheckboxInput label="Active Sales" name="activeSale" />
                <CheckboxInput label="Sold" name="sold" />
                <CheckboxInput label="Not for Sale" name="notForSale" />
              </Flex>
              <HR marginTop={10} marginBottom={10} />
            </StyledFilterDropdown>
          )}
        </Flex>
      </Flex>
    </StyledFilter>
  );
};

export default Filters;
