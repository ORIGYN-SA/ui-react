import styled from "styled-components";
import Flex from "../../layout/Flex";

export type CardProps = {
  padding?: string;
};

const StyledCard = styled(Flex)<CardProps>`
  ${({ padding = "0" }) => `
  background: #FFFFFF;
  padding: ${padding};
  box-shadow: 0px 10px 15px -3px rgba(26, 32, 44, 0.1), 0px 4px 6px -2px rgba(26, 32, 44, 0.05);
`}
`;

export default StyledCard;
