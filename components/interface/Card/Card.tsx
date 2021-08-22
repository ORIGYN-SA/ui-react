import React from "react"
import styled from 'styled-components';
import Flex from '../../layout/Flex';

export type CardProps = {

}

const StyledCard = styled(Flex)<CardProps>`${({ theme }) => `
  background: #FFFFFF;
  box-shadow: 0px 10px 15px -3px rgba(26, 32, 44, 0.1), 0px 4px 6px -2px rgba(26, 32, 44, 0.05);
`}`;

export default StyledCard;
