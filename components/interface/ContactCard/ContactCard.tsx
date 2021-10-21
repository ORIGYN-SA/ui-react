import React from "react";
import styled from "styled-components";
import Flex from "../../layout/Flex";
export type ContactCardProps = {
  personalInfo: PersonalInfo;
};
type PersonalInfo = {
  name?: string;
  role?: string;
  email?: string;
  phone?: string;
  company?: string;
  address?: string;
  zip?: string;
  country?: string;
  website?: string;
  avatar?: string;
};

const StyledContactCard = styled.div`
  ${({ theme }) => `
    box-sizing: border-box;
    background: #ffffff;
    padding: 32px 90px 32px 24px;
    max-width: 900px;
    box-shadow: 0 5px 10px rgba(26, 32, 44, 0.1);
    ${theme.media.md} {
      padding-right: 46px;
    }
  `}
`;

const StyledCardTitle = styled.h4`
  ${({ theme }) => `
    font-size: 12px;
    text-transform: uppercase;
    padding-bottom: 25px;
  `}
`;

const AccountName = styled.p`
  ${({ theme }) => `
    font-size: 24px;
    line-height: 36px;
    font-weight: 500;
    ${theme.media.sm} {
      font-size: 20px;
      line-height: 20px;
    }
  `}
`;
const InfoTitle = styled.p`
  ${({ theme }) => `
    font-weight: 600;
    font-size: 15px;
    line-height: 22px;
    margin: 6px 0 4px;
    ${theme.media.sm} {
      margin: 8px 0 0;
    }
  `}
`;
const ContactInfo = styled.p`
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
`;
const ContactEmail = styled.a`
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
`;

const ContactCardInfo = styled(Flex)`
  ${({ theme }) => `
    justify-content: space-between;
    ${theme.media.sm} {
      flex-direction: column;
    }
  `}
`;

const PersonaInfoWrapper = styled(Flex)`
  ${({ theme }) => `
    ${theme.media.sm} {
      gap: 24px;
      margin-bottom: 40px;
    }
  `}
`;

const ContactWrapper = styled(Flex)`
  ${({ theme }) => `
  flex-flow: column;
  padding-left: 25px;
  font-size: 14px;
  line-height: 22px;
  font-weight: 400;
  font-style: initial;
  ${theme.media.sm} {
    padding-left: 0;
  }
`}
`;

const AvatarWrapper = styled(Flex)`
  ${({ theme }) => `
    width: 116px;
    height: 116px;
    ${theme.media.md}{
    }
    ${theme.media.sm}{
      width: 104px;
      height: 104px;
    }
  `}
`;

const ContactCard = ({ personalInfo }: ContactCardProps) => {
  const {
    name,
    role,
    email,
    phone,
    company,
    address,
    zip,
    country,
    website,
    avatar,
  } = personalInfo;
  return (
    <StyledContactCard>
      <StyledCardTitle>your origyn art contact</StyledCardTitle>
      <ContactCardInfo>
        <PersonaInfoWrapper>
          <AvatarWrapper>
            <img src={avatar} alt="logo" />
          </AvatarWrapper>
          <ContactWrapper>
            <AccountName>{name}</AccountName>
            <InfoTitle>{role}</InfoTitle>
            <ContactEmail href={`mailto:${email}`}>{email}</ContactEmail>
            <ContactInfo>{phone}</ContactInfo>
          </ContactWrapper>
        </PersonaInfoWrapper>
        <ContactWrapper>
          {company} <br />
          {address} <br />
          {zip} <br />
          {country} <br />
          {website} <br />
        </ContactWrapper>
      </ContactCardInfo>
    </StyledContactCard>
  );
};

export default ContactCard;
