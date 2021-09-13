import React from "react";
import styled from "styled-components";
import Flex from "../../layout/Flex/Flex";
import Grid from "../../layout/Grid";
import HR from "../../interface/HR";
import StyledBanner from "../Banner";
import Container from "../../layout/Container/Container";

import FBIcon from "../../icons/FB";
import InstagramIcon from "../../icons/Instagram";
import TwitterIcon from "../../icons/Twitter";
import {Link} from "react-router-dom";

export type FooterProps = {
  bg: string;
};

const StyledFooter = styled(StyledBanner)`
  ${() => `
  h4 {
    font-weight: 400;
  }
`}
`;

const StyledHR = styled(HR)`
  ${() => `
  opacity: 1;
  border-color: #AEAEAE;
`}
`;

const Footer = () => {
  return (
    <StyledFooter>
      <Container size="lg" padding="64px 32px">
        <Grid columns={3} gap={20}>
          <Flex flexFlow="column" gap={20}>
            <h4><Link to="/artworks">Artworks</Link></h4>
            <h4><Link to="/portfolio">My Portfolio</Link></h4>
            <h4><Link to="/order-book">Order Book</Link></h4>
            <h4><Link to="/governance">Governance</Link></h4>
            <h4><Link to="/about">About</Link></h4>
          </Flex>
          <Flex flexFlow="column" gap={20}>
            <h4><Link to="/terms">Terms and Conditions</Link></h4>
            <h4><Link to="/privacy">Privacy Policy</Link></h4>
            <h4><Link to="/disclaimers">Disclaimer</Link></h4>
            <h4><Link to="/in-touch">Get in touch</Link></h4>
          </Flex>
          <Flex flexFlow="column" gap={20}>
            <h4>ORIGYN Art</h4>
            <h4>Address line 1</h4>
            <h4>Address line 2</h4>
            <h4>Country</h4>
            <div>
              <br />
              <h4>email@email.com</h4>
              <br />
            </div>
            <Flex gap={30}>
              <FBIcon width={24} height={24} fill="#ffffff" />
              <InstagramIcon width={24} height={24} fill="#ffffff" />
              <TwitterIcon width={24} height={24} fill="#ffffff" />
            </Flex>
          </Flex>
        </Grid>
        <br />
        <br />
        <br />
        <StyledHR />
        <br />
        <br />
        <br />
        <br />
      </Container>
    </StyledFooter>
  );
};

export default Footer;
