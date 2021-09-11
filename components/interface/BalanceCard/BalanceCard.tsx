import React from "react";
import styled from "styled-components";
import Flex from "../../layout/Flex/Flex";
import HR from "../HR";
import MenuLink from "../MenuLink";
import StyledBanner from "../Banner";

import { numberWithCommas } from "../../../utils";
import ICPIcon from "../../icons/DifinityLogo";

export type BalanceCardProps = {
  balance: number;
};

const StyledBalanceCard = styled.div`
  max-width: 234px;
  width: 100%;
  box-shadow: 0px 5px 10px -5px rgba(0, 0, 0, 0.1);
`;

const StyledBalanceCardContent = styled(Flex)`
  ${({ theme }) => `
    background-color: ${theme.colors.WHITE};
    padding: 24px;
  `}
`;

const StyledMenuLink = styled(MenuLink)`
  text-align: center;
  padding: 14px 0;
`;

const BalanceCard = ({ balance = 0 }: BalanceCardProps) => {
  return (
    <StyledBalanceCard>
      <StyledBanner
        flexFlow="column"
        justify="center"
        align="center"
        padding="24px"
        gap={10}
      >
        <Flex gap={5} align="center">
          <ICPIcon height={16} width={34} />
          <b style={{fontSize: 13}}>ICP</b>
        </Flex>
        <h2>{numberWithCommas(balance)}</h2>
      </StyledBanner>
      <StyledBalanceCardContent flexFlow="column" justify="center">
        <HR accent={false} />
        <StyledMenuLink to="/deposit">DEPOSIT</StyledMenuLink>
        <HR accent={false} />
        <StyledMenuLink to="/withdraw">WITHDRAW</StyledMenuLink>
        <HR accent={false} />
      </StyledBalanceCardContent>
    </StyledBalanceCard>
  );
};

export default BalanceCard;
