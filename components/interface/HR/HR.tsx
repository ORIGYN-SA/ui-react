import styled from 'styled-components';

export type HRProps = {
  marginTop?: number;
  marginBottom?: number;
  accent?: boolean;
}

const StyledCard = styled.hr<HRProps>`${({ accent, marginTop = 0, marginBottom = 0, theme }) => `
  opacity: ${accent ? '1' : '0.2'};
  border: none;
  border-bottom: 1px solid ${accent ? theme.colors.ACCENT_COLOR : theme.colors.BLACK};
  margin: ${marginTop}px 0 ${marginBottom}px 0;
`}`;

export default StyledCard;
