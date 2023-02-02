import styled from "styled-components";
import Flex from "../../layout/Flex/Flex";

export type BannerProps = {
  bgImage?: string;
  bgColor?: string;
  textColor?: string;
  padding?: string;
};

const StyledBanner = styled(Flex)<BannerProps>`
  ${({ theme, padding = "39px 0 52px 0", bgColor, bgImage, textColor}) => `
  background-color: ${bgColor ? bgColor : theme.colors.BLACK};
  background-image: url(${bgImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  box-sizing: border-box;
  color: ${textColor ? textColor : theme.colors.WHITE};
  padding: ${padding};
`}
`;

export default StyledBanner;
