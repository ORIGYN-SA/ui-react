import styled from "styled-components";

export type TContainerSize = "lg" | "sm" | "md" | "full";

export interface ContainerProps {
  size?: TContainerSize;
  smSize?: TContainerSize;
  mdSize?: TContainerSize;
  lgSize?: TContainerSize;
  xlSize?: TContainerSize;
  padding?: string;
  smPadding?: string;
  relative?: boolean;
}

const StyledFlex = styled.div<ContainerProps>`
  ${({ size = "full", smSize, mdSize, lgSize, xlSize, relative, padding = 0, smPadding, theme }) => `
  display: block;
  padding: ${padding};
  max-width: ${size === "full" ? "100%" : `${theme.containers[size]}px`};
  width: 100%;
  box-sizing: border-box;
  position: ${relative ? "relative" : "static"};
  margin: 0 auto;
  
  ${theme.media.sm} {
    max-width: ${smSize === "full" ? "100%" : `${theme.containers[smSize || size]}px`};
    padding: ${smPadding ?? padding};
  }
  
  ${theme.media.md} {
    max-width: ${mdSize === "full" ? "100%" : `${theme.containers[mdSize || size]}px`};
  }
  
  ${theme.media.lg} {
    max-width: ${lgSize === "full" ? "100%" : `${theme.containers[lgSize || size]}px`};
  }
  
  ${theme.media.xl} {
    max-width: ${xlSize === "full" ? "100%" : `${theme.containers[xlSize || size]}px`};
  }
`}
`;

export default StyledFlex;
