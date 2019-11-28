import styled, { keyframes, css } from "styled-components";

const move = keyframes`
from{
  opacity: 0;
}
to{
  opacity:1
}
`;

export const AllWords = styled.div(
  ({ theme }) => css`
    ${theme.mixins.grid_gap(10)};
    grid-template-columns: repeat(auto-fit, 140px);
    grid-auto-rows: 200px;
    justify-content: space-around;
    animation: ${move} 1s ease;
  `
);
