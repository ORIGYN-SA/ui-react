import styled from "styled-components";

export type TFlexFlow = "column" | "row" | "column-reverse" | "row-reverse";

export type FlexProps = {
  justify?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around";
  align?: "flex-start" | "flex-end" | "center";
  flexFlow?: TFlexFlow;
  smFlexFlow?: TFlexFlow;
  mdFlexFlow?: TFlexFlow;
  lgFlexFlow?: TFlexFlow;
  xlFlexFlow?: TFlexFlow;
  smGap?: number;
  mdGap?: number;
  lgGap?: number;
  xlGap?: number;
  fullWidth?: boolean;
  fullHeight?: boolean;
  gap?: number;
  relative?: boolean;
  adapt?: boolean;
};

const StyledFlex = styled.div<FlexProps>`
  ${({
    justify,
    align,
    fullWidth,
    fullHeight,
    flexFlow,
    smFlexFlow,
    mdFlexFlow,
    lgFlexFlow,
    xlFlexFlow,
    relative,
    gap = 0,
    smGap,
    mdGap,
    lgGap,
    xlGap,
    theme,
  }) => `
  display: flex;
  align-items: ${align};
  justify-content: ${justify};
  flex-flow: ${flexFlow ? flexFlow : "row"};
  width: ${fullWidth ? "100%" : "auto"};
  height: ${fullHeight ? "100%" : "auto"};
  gap: ${gap}px;
  position: ${relative ? "relative" : "static"};
  
  ${theme?.media?.sm}{
    flex-flow: ${smFlexFlow ? smFlexFlow : flexFlow};
    gap: ${smGap || gap}px;
  }
  
  ${theme?.media?.md}{
    flex-flow: ${mdFlexFlow ? mdFlexFlow : flexFlow};
    gap: ${mdGap || gap}px;
  }
  
  ${theme?.media?.lg}{
    flex-flow: ${lgFlexFlow ? lgFlexFlow : flexFlow};
    gap: ${lgGap || gap}px;
  }
  
  ${theme?.media?.xl}{
    flex-flow: ${xlFlexFlow ? xlFlexFlow : flexFlow};
    gap: ${xlGap || gap}px;
  }
`}
`;

export default StyledFlex;
