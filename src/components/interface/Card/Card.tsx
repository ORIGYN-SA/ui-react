import styled from "styled-components";
import Flex from "../../layout/Flex";

export type CardProps = {
  padding?: string;
  shadow?: "sm" | "md" | "lg";
};

const StyledCard = styled(Flex)<CardProps>`
  ${({ theme, padding = "0", shadow = "md" }) => `
  background: ${theme.colors.WHITE};
  padding: ${padding};
  box-shadow: ${theme?.shadows[shadow]};
`}
`;

export default StyledCard;
