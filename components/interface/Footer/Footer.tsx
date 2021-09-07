import React from "react"
import styled from 'styled-components';
import Flex from "../../layout/Flex/Flex";
import Grid from "../../layout/Grid";
import HR from "../../interface/HR";
import StyledBanner from "../Banner";
import Container from "../../layout/Container/Container";

import FBIcon from "../../icons/FB";
import InstagramIcon from "../../icons/Instagram";
import TwitterIcon from "../../icons/Twitter";

export type FooterProps = {
  bg: string;
}

const StyledFooter = styled(StyledBanner)`${() => `
  h4 {
    font-weight: 400;
  }
`}`;

const StyledHR = styled(HR)`${() => `
  opacity: 1;
  border-color: #AEAEAE;
`}`;

const Footer = () => {

  return (
    <StyledFooter>
      <Container size="lg" padding="64px 0">
        <Grid columns={3}>
          <Flex flexFlow="column" gap={20}>
            <h4>Artworks</h4>
            <h4>My Portfolio</h4>
            <h4>Order Book</h4>
            <h4>Governance</h4>
            <h4>About</h4>
          </Flex>
          <Flex flexFlow="column" gap={20}>
            <h4>Terms and Conditions</h4>
            <h4>Privacy Policy</h4>
            <h4>Disclaimer</h4>
            <h4>Get in touch</h4>
          </Flex>
          <Flex flexFlow="column" gap={20}>
            <h4>ORIGYN Art</h4>
            <h4>Address line 1</h4>
            <h4>Address line 2</h4>
            <h4>Country</h4>
            <div>
              <br/>
              <h4>email@email.com</h4>
              <br/>
            </div>
            <Flex gap={30}>
              <FBIcon width={24} height={24} fill="#ffffff"/>
              <InstagramIcon width={24} height={24} fill="#ffffff"/>
              <TwitterIcon width={24} height={24} fill="#ffffff"/>
            </Flex>
          </Flex>
        </Grid>
        <br/>
        <br/>
        <br/>
        <StyledHR/>
        <br/>
        <br/>
        <br/>
        <br/>
      </Container>
    </StyledFooter>
  )
}

export default Footer;
