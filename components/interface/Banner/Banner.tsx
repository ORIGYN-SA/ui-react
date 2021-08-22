import React from "react"
import styled from 'styled-components';

export type BannerProps = {
  bg: string;
}

const StyledBanner = styled.div<BannerProps>`${({ theme }) => `
  
`}`;

export default StyledBanner;
