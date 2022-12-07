import styled, {css} from "styled-components";

export type ButtonProps = {
  size?: "small" | "medium" | "large";
  btnType?: "outlined" | "secondary";
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

const buttonSize = {
  small: smallSize,
  large: largeSize,
  medium: mediumSize,
}

const outlined = css`
  background-color: transparent;
  color: inherit;
  border: 1px solid #E3E3E3;
  
  svg {
    fill: currentColor;
  }
`;

const secondary = css`
  background-color: ${({theme}) => theme.colors.WHITE};
  color: ${({theme}) => theme.colors.BLACK};
  svg {
    fill: ${({theme}) => theme.colors.BLACK};
  }
`;

const buttonTypes = {
  outlined: outlined,
  secondary: secondary,
}

const StyledButton = styled.button<ButtonProps>
`
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-transform: none;
  gap: 15px;
  align-items: center;
  box-sizing: border-box;
  background: ${({theme}) => theme.colors.BLACK};
  color: ${({theme}) => theme.colors.WHITE};
  border: none;
  
  svg {
    fill: ${({theme}) => theme.colors.WHITE};
  }
  
  ${({size = "large"}) => buttonSize[size]};
  ${({btnType }) => buttonTypes[btnType]};
  
  ${({ theme, btnType, size = "large", disabled, iconButton, textButton }) => `
  :hover, &.hover {
    background-color: ${theme.colors.ACCENT_COLOR};
  }
  :active, &.active {
    background-color: ${theme.colors.ACCENT_COLOR};
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
    border-radius: 50%;
    padding: 0;
    ${size === "medium" ? `
      width: 40px;
      height: 40px;
    ` : ""}
    ${size === "small" ? `
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
  
`}
`;

export default StyledButton;
