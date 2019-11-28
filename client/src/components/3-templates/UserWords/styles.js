import styled, { css } from "styled-components";

export const UserWords = styled.div(
  ({ theme }) => css`
    ${theme.mixins.grid_gap(15)}
    grid-auto-rows: minmax(220px, auto);
    grid-template-columns: repeat(auto-fill, 315px);
    justify-content: space-around;
    grid-column: 1/-1;
    padding-bottom: 10px;
  `
);
