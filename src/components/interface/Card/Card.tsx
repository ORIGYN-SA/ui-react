import styled, {css} from "styled-components";
import Flex from "../../layout/Flex";

export type CardProps = {
  padding?: string;
  type?: 'outlined' | "filled" | "elevated";
};


const outlined = css`
  background: transparent;
  border: 1px solid ${({theme}) => theme.colors.BORDER};
  border-radius: 12px;
`;

const filled = css`
  background: ${({theme}) => theme.colors.BACKGROUND};
  border-radius: 12px;
  color: ${({theme}) => theme.colors.TEXT};
`;

const elevated = css`
  background: ${({theme}) => theme.colors.BACKGROUND};
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
  background: ${theme.colors.BACKGROUND};
  color: ${theme.colors.TEXT};
  ${cardTypes[type]};
  padding: ${padding};
  overflow: hidden;
`}
`;

export default StyledCard;
