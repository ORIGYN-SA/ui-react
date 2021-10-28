import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Flex from "../../layout/Flex";
import ArrowRightIcon from "../../icons/ArrowRight";

export type BreadCrumbsProps = {
  data: Array<{ title: string; link: string }>;
};

const SBreadCrumbs = styled.div`
  ${({theme}) => `
  display: flex;
  gap: 15px;
  font-weight: 500;
  font-size: 13px;
  line-height: 18px;
  margin: 12px 0;
  color: ${theme.colors.BLACK};
  
  svg {
    fill: ${theme.colors.MID_GREY};
  }
  
  a {
    text-decoration: none;
    color: ${theme.colors.DARK_GREY};
  }
`}
`;

const BreadCrumbs = ({ data }: BreadCrumbsProps) => {
  return (
    <SBreadCrumbs>
      {data.map(({link, title}, index) => (
        <Flex gap={15} align="center" key={title}>
          {index > 0 && <ArrowRightIcon />}
          {index + 1 === data.length ? (
            <span>{title}</span>
          ) : (
            <Link to={link}>{title}</Link>
          )}
        </Flex>
      ))}
    </SBreadCrumbs>
  );
};

export default BreadCrumbs;
