import styled, { css } from "styled-components";

export const MongoWordsView = styled.div``;

export const TextContainer = styled.div(
  ({ theme }) => css`
    ${theme.mixins.grid_gap(20)};
    margin: 30px auto;
    max-width: 600px;
  `
);

export const InputContainer = styled.div`
  width: 100%;
  max-width: 400px;
  background-color: #fff;
  margin: 20px auto;
`;
