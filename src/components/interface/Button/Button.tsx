import styled, {css} from "styled-components";

export type ButtonProps = {
  size?: (keyof typeof sizes) | string;
  smSize?: (keyof typeof sizes) | string;
  mdSize?: (keyof typeof sizes) | string;
  lgSize?: (keyof typeof sizes) | string;
  btnType?: "primary" | "secondary" | "ternary";
  disabled?: boolean;
};

const primaryStyle = css`${({theme}) => `
  background-color: ${theme.colors.BLACK};
  color: ${theme.colors.WHITE};
  border: none;
  
  :hover {
    background-color: ${theme.colors.ACCENT_COLOR};
    color: ${theme.colors.BLACK};
  }
`}`;

const secondaryStyle = css`${({theme}) => `
  border: 2px solid ${theme.colors.BLACK};
  background-color: transparent;
  
  :hover {
    background-color: ${theme.colors.ACCENT_COLOR};
    border-color: ${theme.colors.ACCENT_COLOR};
  }
`}`;

const ternaryStyle = css`${({theme}) => `
  background-color: transparent;
  border: none;
  
  :hover {
    color: ${theme.colors.ACCENT_COLOR};
  }
`}`;

const buttonType = {
  primary: primaryStyle,
  secondary: secondaryStyle,
  ternary: ternaryStyle,
}

const sizes = {
  sm: "auto",
  md: "320px",
  lg: "460px",
  fullWidth: "100%"
}

const StyledFlex = styled.button<ButtonProps>`
  ${({btnType = "primary"}) => buttonType[btnType] || buttonType.primary}
  ${({ theme, btnType, disabled, size = "md", mdSize, smSize, lgSize }) => `
  display: flex;
  width: ${sizes[size] || size};
  height: 50px;
  border-radius: 1px;
  font-weight: bold;
  font-size: 13px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  
  ${disabled ? `
    background-color: ${btnType === "ternary" ? "transparent" : theme.colors.MID_GREY};
    border-color: ${theme.colors.MID_GREY};
    color: ${btnType === "ternary" ? theme.colors.MID_GREY : theme.colors.WHITE};
    cursor: not-allowed;
    :hover {
      background-color: ${btnType === "ternary" ? "transparent" : theme.colors.MID_GREY};
      border-color: ${theme.colors.MID_GREY};
      color: ${btnType === "ternary" ? theme.colors.MID_GREY : theme.colors.WHITE};
    }
  ` : ""}
  
  ${theme.media.lg} {
    width: ${sizes[lgSize] || lgSize};
  }
  ${theme.media.md} {
    width: ${sizes[mdSize] || mdSize};
  }
  ${theme.media.sm} {
    width: ${sizes[smSize] || smSize};
  }
`}
`;

export default StyledFlex;
