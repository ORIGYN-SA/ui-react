import styled, {css} from "styled-components";

export type ButtonProps = {
  size?: "sm" | "md" | "lg";
  btnType?: "primary" | "secondary" | "ternary";
  disabled?: boolean;
  fullWidth?: boolean;
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
}

const StyledFlex = styled.button<ButtonProps>`
  ${({btnType = "primary"}) => buttonType[btnType] || buttonType.primary}
  ${({ theme, fullWidth, btnType, disabled, size = "md" }) => `
  display: flex;
  width: ${fullWidth ? "100%" : sizes[size]};
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
`}
`;

export default StyledFlex;
