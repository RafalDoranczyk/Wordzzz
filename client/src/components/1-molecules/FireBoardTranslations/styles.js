import styled, { css } from "styled-components";
import { Input } from "components/0-atoms/Input/styles";

export const FireBoardTranslations = styled.div(
  ({ theme }) => css`
    ${theme.mixins.grid_gap(2)};
    grid-template-rows: repeat(6, 1fr);
  `
);

export const TranslationItem = styled.div(
  ({ theme }) => css`
    padding: 2px 3px 2px 3px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 5px;
    position: relative;
    &:focus-within {
      background-color: ${theme.colors.white};
    }
    &::after {
      border-radius: 5px;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background-color: ${theme.colors.lightBlue};
      z-index: -1;
      opacity: 0.5;
    }
  `
);

export const TranslationInput = styled(Input)(
  ({ theme }) => css`
    transition: 0.3s;
    font-size: 13px;
    background-color: transparent;
    font-style: italic;
    width: 75%;
    display: block;
    height: 25px;
    letter-spacing: 1px;
    color: ${theme.colors.white};
    overflow: auto;
  `
);
