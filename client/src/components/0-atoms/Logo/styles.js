import styled, { css } from "styled-components";

export const LogoContainer = styled.div(
  ({ theme }) => css`
    height: 35px;
    padding: 5px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px ridge ${theme.colors.blue};
    background-color: ${theme.colors.lightBlue};
    outline: none;
  `
);

export const Anchor = styled.a(
  ({ theme }) => css`
    font-size: 1.4rem;
    letter-spacing: 1px;
    text-decoration: none;
    text-transform: uppercase;
    color: ${theme.colors.white};
    cursor: pointer;
  `
);
