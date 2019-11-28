import styled, { css } from "styled-components";

export const AboutAppView = styled.div(
  ({ theme }) => css`
    ${theme.mixins.grid_gap(30)};
    margin-top: 10px;
    padding: 15px;
    z-index: 2;
    position: relative;
    @media (orientation: landscape) {
      margin: 0 auto;
      width: 90%;
      max-width: 600px;
    }
  `
);

export const AboutApp = styled.div(
  ({ theme }) => css`
    ${theme.mixins.grid_gap(15)}
    grid-template-rows: auto 1fr;
  `
);
