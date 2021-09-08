import React from "react";
import styled from "styled-components";
import Flex from "../../layout/Flex";
import ArrowRightIcon from "../../icons/ArrowRight";

export type BreadCrumbsProps = {
  data: Array<{ title: string; link: string }>;
};

const StyledBreadCrumbsLink = styled.a`
  ${() => `
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  margin: 12px 0;
`}
`;

const TextInput = ({ data }: BreadCrumbsProps) => {
  return (
    <Flex gap={15} align="center">
      {data.map((item, index) => (
        <>
          {index > 0 && <ArrowRightIcon />}
          <StyledBreadCrumbsLink>{item.title}</StyledBreadCrumbsLink>
        </>
      ))}
    </Flex>
  );
};

export default TextInput;
