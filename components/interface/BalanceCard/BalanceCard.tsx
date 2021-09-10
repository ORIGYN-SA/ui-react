import React from "react";
import styled from "styled-components";
import Flex from "../../layout/Flex/Flex";
import HR from "../HR";
import MenuLink from "../MenuLink";
import { numberWithCommas } from "../../../utils/index";
export type BalanceCardProps = {
  balance?: number;
};

const StyledBalanceCard = styled.div`
  max-width: 234px;
  width: 100%;
  box-shadow: 0px 5px 10px -5px rgba(0, 0, 0, 0.1);
`;
const StyledBalanceCardHeader = styled(Flex)`
  ${({ theme }) => `
    background-color: ${theme.colors.BLACK};
    color: ${theme.colors.WHITE};
    padding: 24px;
  `}
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
      <StyledBalanceCardHeader
        flexFlow="column"
        justify="center"
        align="center"
      >
        <Flex>
          <img src="http://placehold.jp/34x16.png" alt="logo" />
          <p>ICP</p>
        </Flex>
        <h2>{numberWithCommas(balance)}</h2>
      </StyledBalanceCardHeader>
      <StyledBalanceCardContent flexFlow="column" justify="center">
        <HR accent={false} />
        <StyledMenuLink>DEPOSIT</StyledMenuLink>
        <HR accent={false} />
        <StyledMenuLink>WITHDRAW</StyledMenuLink>
        <HR accent={false} />
      </StyledBalanceCardContent>
    </StyledBalanceCard>
  );
};

export default BalanceCard;
