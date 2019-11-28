import styled, { css, keyframes } from "styled-components";
import { Text } from "components/0-atoms/Text/styles";
import { Button } from "components/0-atoms/Button/styles";

const letterShow = keyframes`
from{
  transform: scale(0)
}
to{
  transform: scale(1)
}

`;

export const SingleBox = styled.div(
  ({ theme, isBoardShade }) => css`
    width: 95vw;
    max-width: 800px;
    min-height: 300px;
    background-color: ${theme.colors.lightBlack};
    padding: 5px 10px 30px 10px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-around;
    align-items: center;
    border-radius: 10px;
    position: relative;
    overflow: hidden;
    box-shadow: 0 18px 18px rgba(0, 0, 0, 0.25), 0 6px 6px rgba(0, 0, 0, 0.22);
    & > div {
      margin: 10px 0;
    }
    &::after {
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      transform: ${isBoardShade ? "translateY(0)" : "translateY(-100%)"};
      transition: 0.2s ease-in transform;
      background-color: ${theme.colors.lightBlack};
      opacity: 0.8;
    }
  `
);

export const WordToTranslate = styled(Text)`
  color: white;
  letter-spacing: 2px;
  font-size: 1.8rem;
  text-transform: uppercase;
`;

export const LettersToGuessWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  width: 99%;
  overflow-x: auto;
  &::after {
    position: relative;
    right: 0;
    flex: 1 0 auto;
    height: 100%;
    width: 1px;
  }
`;

export const LetterToGuess = styled.div(
  ({ theme, num }) => css`
  ${theme.mixins.flex_center};
    flex-shrink: 0;
    height: 40px;
    width: 35px;
    font-size: 1.7rem;
    color: ${theme.colors.white};
    margin: 5px;
    border-radius: 5px;
    border: 1px solid ${theme.colors.white};
    position: relative;
    &::before {
      ${theme.mixins.flex_center};
      top: -5px;
      left: -5px;
      height: 15px;
      width: 15px;
      font-size: 1rem;
      border-radius: 1px;
      background-color: ${theme.colors.lightBlack};
      color: ${theme.colors.darkWhite};
      content: '${num}'
    }
  `
);

export const Letter = styled.span(
  ({ letter }) => css`
    font-size: 2rem;
    text-transform: uppercase;
    ${letter &&
      css`
        animation: ${letterShow} 0.2s ease-in;
      `}
  `
);

export const LettersToClickWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;

export const LetterPossibleToClick = styled.button(
  ({ theme, wasClicked, isVovel }) => css`
    margin: 5px;
    height: 34px;
    width: 34px;
    background-color: ${isVovel ? theme.colors.red : theme.colors.blue};
    color: ${theme.colors.darkWhite};
    font-size: 1.5rem;
    border-radius: 5px;
    box-shadow: 0 0 2px 2px ${theme.colors.black};
    text-transform: uppercase;
    font-weight: bold;
    transition: 0.3s ease-out transform, 0.3s linear opacity;
    opacity: 0.7;
    transform: ${wasClicked
      ? "translateY(0) scale(0)"
      : "translateY(0) scale(1)"};
    &:hover {
      opacity: 1;
    }
  `
);

export const NextWordButton = styled(Button)(
  ({ isNextButtonVisible, theme }) => css`
    position: absolute;
    right: 2%;
    bottom: 2%;
    font-size: 2rem;
    transform: ${isNextButtonVisible ? "scale(1)" : "scale(0)"};
    transition: 0.3s ease-in transform;
    z-index: 1;
    &:hover {
      color: ${theme.colors.darkWhite};
    }
  `
);

export const TextToUser = styled.p(
  ({ theme }) => css`
    height: 30px;
    font-size: 1.3rem;
    color: ${theme.colors.darkWhite};
    text-align: center;
  `
);
