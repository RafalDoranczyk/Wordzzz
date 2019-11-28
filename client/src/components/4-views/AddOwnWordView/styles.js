import styled, { css } from "styled-components";

export const AddOwnWordView = styled.div(
  ({ theme }) => css`
    ${theme.mixins.grid_gap(40)};
    width: 98%;
    max-width: 600px;
    margin: 0 auto 10px auto;
  `
);

export const Anchor = styled.a(
  ({ theme }) => css`
    margin: 0 5px;
    font-weight: 700;
    color: ${theme.colors.lightBlue};
    cursor: pointer;
    &:hover {
      color: ${theme.colors.blue};
    }
  `
);
