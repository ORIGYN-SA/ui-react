import React from "react"
import styled from 'styled-components';
import Card from '../Card';
import HR from '../HR';

export type ProductCardProps = {

}

const StyledProductCardContent = styled.div`${({ theme }) => `
  padding: 15px;
`}`;

const ProductCard = () => {

  return <Card flexFlow="column">
    <img src="http://placehold.jp/440x290.png" alt="123"/>
    <StyledProductCardContent>
      <h3>Nude Woman leaning on pillows</h3>
      <h4>Pablo Picasso</h4>
      <HR />
      <HR />
    </StyledProductCardContent>
  </Card>
}

export default ProductCard;
