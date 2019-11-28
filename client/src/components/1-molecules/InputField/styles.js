import styled, { css } from "styled-components";

export const InputField = styled.div(
  ({ theme }) => css`
    height: 37px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    transform: 3s opacity linear;
    background-color: ${theme.colors.green};
  `
);
