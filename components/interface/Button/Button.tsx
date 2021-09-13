import styled, {css} from "styled-components";

export type ButtonProps = {
  size?: "sm" | "md" | "lg";
  type?: "primary" | "secondary" | "ternary";
  disabled?: boolean;
  fullWidth?: boolean;
};

const primaryStyle = css`${({theme}) => `
  background-color: ${theme.colors.BLACK};
  color: ${theme.colors.WHITE};
  
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
  
  :hover {
    color: ${theme.colors.ACCENT_COLOR};
  }
`}`;

const buttonType = {
  primary: primaryStyle,
  secondary: secondaryStyle,
  ternary: ternaryStyle,
}

const StyledFlex = styled.div<ButtonProps>`
  ${({type = "primary"}) => buttonType[type]}
  ${({ theme, fullWidth, type, disabled }) => `
  display: flex;
  width: ${fullWidth ? "100%" : "320px"};
  height: 50px;
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
    background-color: ${type === "ternary" ? "transparent" : theme.colors.MID_GRAY};
    border-color: ${theme.colors.MID_GRAY};
    color: ${type === "ternary" ? theme.colors.MID_GRAY : theme.colors.WHITE};
    cursor: not-allowed;
    :hover {
      background-color: ${type === "ternary" ? "transparent" : theme.colors.MID_GRAY};
      border-color: ${theme.colors.MID_GRAY};
      color: ${type === "ternary" ? theme.colors.MID_GRAY : theme.colors.WHITE};
    }
  ` : ""}
`}
`;

export default StyledFlex;
