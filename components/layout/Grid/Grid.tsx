import styled from 'styled-components';

export interface GridProps {
  columns?: number;
  gap?: number;
  rows?: number;
}

const StyledGrid = styled.div<GridProps>`${({columns, gap, rows}) => `
  display: grid;
  grid-template-columns: repeat(${columns}, 1fr);
  grid-template-rows: ${rows};
  gap: ${gap}px;
`}`;

export default StyledGrid;
