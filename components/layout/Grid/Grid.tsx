import styled from 'styled-components';

export interface GridProps {
  columns?: number;
  gap?: number;
  rows?: number;
}

const StyledGrid = styled.div<GridProps>`${({columns, theme, gap, rows}) => `
  display: grid;
  grid-template-columns: repeat(${columns}, minmax(0, 1fr));
  grid-template-rows: ${rows};
  gap: ${gap}px;
  
  ${theme.media.sm} {
    grid-template-columns: repeat(1, minmax(0, 1fr))!important;
  }
`}`;

export default StyledGrid;
