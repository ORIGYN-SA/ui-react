import styled, {css} from "styled-components";
import Flex from "../../layout/Flex";

export type CardProps = {
  padding?: string;
  type?: 'outlined' | "filled" | "elevated";
};


const outlined = css`
  background: ${({theme}) => theme.colors.BLACK};
  border: 1px solid #242424;
  border-radius: 12px;
`;

const filled = css`
  background: ${({theme}) => theme.colors.WHITE};
  border-radius: 12px;
  color: ${({theme}) => theme.colors.BLACK};
`;

const elevated = css`
  background: ${({theme}) => theme.colors.BLACK};
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
  background: ${theme.colors.BLACK};
  color: ${theme.colors.WHITE};
  ${cardTypes[type]};
  padding: ${padding};
  overflow: hidden;
`}
`;

export default StyledCard;
