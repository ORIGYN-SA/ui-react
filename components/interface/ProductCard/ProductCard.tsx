import React from "react"
import styled from 'styled-components';
import Card from '../Card';
import HR from '../HR';
import Flex from '../../layout/Flex';
import Button from '../Button';

export type ProductCardProps = {

}

const StyledProductCardContent = styled.div`${() => `
  padding: 15px;
`}`;

const ProductCard = () => {

  return <Card flexFlow="column">
    <img src="http://placehold.jp/440x290.png" alt="123"/>
    <StyledProductCardContent>
      <h3>Nude Woman leaning on pillows</h3>
      <h4>Pablo Picasso</h4>
      <HR marginBottom={16} marginTop={16} />
      <Flex justify="space-between">
        <Flex flexFlow="column">
          <p>Total value</p>
          <p><b>$1,000,000.00</b></p>
        </Flex>
        <Flex flexFlow="column">
          <p>Total shares</p>
          <p><b>10,000</b></p>
        </Flex>
        <Flex flexFlow="column">
          <p>Listing ends</p>
          <p><b style={{color: 'red'}}>4 hrs 23 sec</b></p>
        </Flex>
      </Flex>
      <HR marginBottom={27} marginTop={24} />
      <Flex align="center" justify="center">
        <Button>BUY / COUNTER</Button>
      </Flex>
    </StyledProductCardContent>
  </Card>
}

export default ProductCard;
