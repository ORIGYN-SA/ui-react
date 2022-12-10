import styled from "styled-components";

const StyledCustomMoreLink = styled.a`
  ${({ theme }) => `
  text-decoration: none;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  align-items: center;
  color: ${theme.colors.TEXT};
  display: flex;
  gap: 10px;
`}
`;

export default StyledCustomMoreLink;
