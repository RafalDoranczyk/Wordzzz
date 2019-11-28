import styled, { css } from "styled-components";

export const AddOwnWordForm = styled.form(
  ({ theme }) => css`
    ${theme.mixins.grid_gap(5)};
    grid-template-columns: 1fr 1fr;
    align-content: space-between;
    padding: 0 5%;
    position: relative; /*FOR SPINNER */

    &::after {
      bottom: 15px;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: ${({ theme }) => theme.colors.lightBlue};
    }
    & > input {
      text-align: center;
      height: 35px;
      &:nth-child(1) {
        grid-column: 1 /-1;
      }
    }

    & > button {
      height: 30px;
      z-index: 2;
      grid-column: 1/-1;
      justify-self: center;
      position: relative;
    }

    @media (${theme.queries.smartphone}) {
      height: 210px;
    }
  `
);
