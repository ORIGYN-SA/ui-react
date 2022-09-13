import styled, {css} from "styled-components";
import React from "react";
import Flex from "../../layout/Flex";
export type RangeSliderProps = {
  disabled?: boolean;
};
const StyledRangeSlider = styled.input`
  ${() => `

`}
`;
const RangeSlider = ({ disabled }: RangeSliderProps) => {
  return (
      <StyledRangeSlider disabled={disabled} type="range" />
  );
}

export default RangeSlider;