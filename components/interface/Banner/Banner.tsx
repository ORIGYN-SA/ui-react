import styled from "styled-components";
import Flex from "../../layout/Flex/Flex";

export type BannerProps = {
  bg?: string;
  padding?: string;
};

const StyledBanner = styled(Flex)<BannerProps>`
  ${({ theme, padding = "39px 0 52px 0"}) => `
  background-color: ${theme.colors.BLACK};
  color: ${theme.colors.WHITE};
  padding: ${padding};
`}
`;

export default StyledBanner;
