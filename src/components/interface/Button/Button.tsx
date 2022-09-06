import styled, {css} from "styled-components";

export type ButtonProps = {
  size?: string;
  btnType?: "small" | "medium" | "large";
  iconButton?: boolean;
  textButton?: boolean;
  disabled?: boolean;
};

const largeSize = css`${({theme}) => `
  padding: 17px 24px;
  font-weight: 600;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: -0.2px;
  border-radius: 28px;
`}`;

const mediumSize = css`${({theme}) => `
  padding: 9px 24px;
  font-weight: 600;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: -0.2px;
  border-radius: 20px;
`}`;

const smallSize = css`${({theme}) => `
  padding: 6px 16px;
  font-weight: 600;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: -0.2px;
  border-radius: 16px;
  gap: 10px;
`}`;

const buttonType = {
  small: smallSize,
  large: largeSize,
  medium: mediumSize,
}

const StyledFlex = styled.button<ButtonProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-transform: none;
  gap: 15px;
  align-items: center;
  box-sizing: border-box;
  background: #151515;
  color: #FEFEFE;
  border: none;
  
  svg {
    fill: #FEFEFE;
  }
  
  ${({btnType = "small"}) => buttonType[btnType]}
  
  ${({ theme, btnType, disabled, size = "auto", iconButton, textButton }) => `
  :hover, &.hover {
    background-color: #5F5F5F;
  }
  :active, &.active {
    background-color: #3A3A3A;
  }
  cursor: pointer;
  
  ${disabled ? `
    background-color: ${theme.colors.MID_GREY};
    border-color: ${theme.colors.MID_GREY};
    color: ${theme.colors.WHITE};
    cursor: not-allowed;
    :hover {
      background-color: ${theme.colors.MID_GREY};
      border-color: ${theme.colors.MID_GREY};
      color: ${theme.colors.WHITE};
    }
  ` : ""}
  ${iconButton ? `
    position: relative;
    width: 56px;
    height: 56px;
    padding: 0;
    ${btnType === "medium" ? `
      width: 40px;
      height: 40px;
    ` : ""}
    ${btnType === "small" ? `
      width: 32px;
      height: 32px;
    ` : ""}
  ` : ""}
  
  ${textButton ? `
    background: transparent;
    color: #151515;
    
    > svg {
      fill: #151515;
    }
    
    :hover, &.hover {
      background: #FAFAFA;
    }
    :active, &.active {
      background: #F2F2F2;
    }
  ${disabled ? `
    background: transparent;
    cursor: not-allowed;
    :hover {
      background: transparent;
    }
  ` : ""}
  ` : ""}
  ${theme.media.sm} {
  
  }
`}
`;

export default StyledFlex;
