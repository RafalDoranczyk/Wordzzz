import styled, { css } from "styled-components";

export const AuthPage = styled.div(
  ({ theme }) => css`
    ${theme.mixins.flex_center};
    height: 100vh;
    background-color: ${theme.colors.black};
    /* FOR DROPPING WORDS */
    z-index: 0;
    position: relative;
  `
);
