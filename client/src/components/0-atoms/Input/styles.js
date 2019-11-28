import styled, { css } from "styled-components";

export const Input = styled.input(
  ({ theme }) => css`
    height: 35px;
    width: 100%;
    padding: 5px;
    border: none;
    background-color: ${theme.colors.lightBlack};
    color: ${theme.colors.white};
    &::placeholder {
      color: ${theme.colors.gray};
    }
    &:hover,
    &:focus {
      background-color: ${theme.colors.black};
    }
  `
);
