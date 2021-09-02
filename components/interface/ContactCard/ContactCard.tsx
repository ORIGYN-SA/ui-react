import React from "react";
import styled from "styled-components";
import Flex from "../../layout/Flex";
import Grid from "../../layout/Grid";
export type ContactCardProps = {};

const StyledContactCard = styled(Flex)`
  background: #ffffff;
  padding: 32px;
  max-width: 900px;
`;

const StyledCardTitle = styled.h4`
  ${({ theme }) => `
  padding-bottom: 25px;
  ${theme.media.md}{
    text-align: center;
  }
`}
`;

const AccountName = styled.p`
  font-size: 30px;
  line-height: 44px;
  font-weight: 500;
`;
const InfoTitle = styled.p`
  font-size: 16px;
  line-height: 24px;
  font-weight: 600;
`;
const ContactInfo = styled.p`
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
`;
const ContactAddress = styled.p`
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
`;

const ContactWrapper = styled(Flex)`
  ${({ theme }) => `
  flex-flow: column;
  width: 50%;
  padding-left: 25px;
  ${theme.media.md}{
    padding-left: 0;
    align-items: center;
    width: 100%;
  }
`}
`;

const AvatarWrapper = styled(Flex)`
  ${({ theme }) => `
  ${theme.media.md}{
    justify-content: center;
  }
`}
`;

const ContactCard = () => {
  return (
    <StyledContactCard>
      <Flex flexFlow="column" fullWidth>
        <StyledCardTitle>YOUR ORIGYN ART CONTACT</StyledCardTitle>
        <Flex adapt>
          <AvatarWrapper>
            <img
              src="http://placehold.jp/150x150.png"
              alt="logo"
              width="150"
              height="150"
            />
          </AvatarWrapper>
          <Flex fullWidth adapt>
            <ContactWrapper>
              <AccountName>Rosalie Pernot</AccountName>
              <InfoTitle>Account Manager</InfoTitle>
              <ContactInfo>rosalie@origyn.ch </ContactInfo>
              <ContactInfo>
                T +41 78 204 65 25 / T +33 6 17 86 79 83
              </ContactInfo>
            </ContactWrapper>
            <ContactWrapper>
              <InfoTitle>ORIGYN Foundation</InfoTitle>
              <ContactAddress>Rue des Usines 44</ContactAddress>
              <ContactAddress>2000 Neuchâtel</ContactAddress>
              <ContactAddress>Switzerland</ContactAddress>
              <ContactAddress>www.origyn.ch/art</ContactAddress>
            </ContactWrapper>
          </Flex>
        </Flex>
      </Flex>
    </StyledContactCard>
  );
};

export default ContactCard;
