import styled, {css} from "styled-components";
import Flex from "../../layout/Flex";

export type CardProps = {
  padding?: string;
  type?: 'outlined' | "filled" | "elevated";
};


const outlined = css`
  background: #FEFEFE;
  border: 1px solid #E3E3E3;
  border-radius: 12px;
`;

const filled = css`
  background: #FAFAFA;
  border-radius: 12px;
`;

const elevated = css`
  background: #FEFEFE;
  box-shadow: 0px 1px 12px rgba(18, 18, 18, 0.04), 0px 0px 4px rgba(18, 18, 18, 0.08);
  border-radius: 12px;
`;

const cardTypes = {
  outlined,
  filled,
  elevated,
}

const StyledCard = styled(Flex)<CardProps>`
  ${({ theme, padding = "0", type = "outlined" }) => `
  background: ${theme.colors.WHITE};
  ${cardTypes[type]};
  padding: ${padding};
`}
`;

export default StyledCard;
