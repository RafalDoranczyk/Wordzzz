import styled, { css } from "styled-components";

export const FireBoardResults = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
`;

export const WordResultItem = styled.p(
  ({ theme, isWordKnown }) => css`
    flex-grow: 1;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-around;
    align-items: center;
    font-size: 1.1rem;
    color: ${theme.colors.darkWhite};
    &:not(:last-child) {
      border-bottom: 1px solid
        ${isWordKnown ? theme.colors.lightGreen : theme.colors.lightRed};
    }
  `
);
