import React from "react"
import styled from 'styled-components';
import Flex from "../../layout/Flex/Flex";

export type BannerProps = {
  bg: string;
}

const StyledBanner = styled(Flex)`${({theme}) => `
  background-color: ${theme.colors.BLACK};
  color: ${theme.colors.WHITE};
  padding: 39px 0 52px 0;
`}`;

export default StyledBanner;
