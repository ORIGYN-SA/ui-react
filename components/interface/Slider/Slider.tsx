import React from "react";
import styled from "styled-components";
import Card from "../Card";
import { Carousel } from 'react-responsive-carousel';


export interface SliderProps {
  children?: React.ReactChild[];
}

const StyledArrow = styled.div`
  ${() => `
    border: solid black;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 3px;
`}
`;

const ProductCard: React.FC<SliderProps> = ({children}) => {
  return (
    <Carousel
      renderArrowPrev={() => <div></div>}
      renderArrowNext={() => <div></div>}
      renderIndicator={() => <div></div>}
    >
      {children}
    </Carousel>
  );
};

export default ProductCard;
