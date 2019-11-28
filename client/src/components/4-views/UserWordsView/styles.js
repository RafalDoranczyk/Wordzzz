import styled, { css } from "styled-components";

export const UserWordsView = styled.div`
  @media (orientation: landscape) and (min-width: 800px) {
  }
`;

export const TextBox = styled.div`
  margin: 25px auto;
  max-width: 800px;
  @media (orientation: landscape) and (min-width: 600px) {
    padding: 20px;
  }
  @media (min-width: 1000px) {
    padding: 40px;
  }
`;

export const FilterBox = styled.div(
  ({ theme }) => css`
    margin: 20px 0;
    ${theme.mixins.grid_gap(5)};
  `
);

export const InputContainer = styled.div`
  max-width: 400px;
`;
