import styled, { css, keyframes } from "styled-components";

const move = keyframes`
from{
 opacity: 0
}
opacity: 1
}
`;

export const Wrapper = styled.div`
  width: 100%;
  border-radius: 5px;
  overflow-x: auto;
  padding: 5px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

export const PageButtons = styled(ButtonsContainer)``;

export const LetterButtons = styled(ButtonsContainer)`
  align-items: center;
  position: relative;

  &::after {
    position: initial;
    flex: 0 0 10px;
    height: 30px;
  }
`;

const Button = styled.button(
  ({ isActive, theme }) => css`
    flex-shrink: 0;
    margin: 4px;
    background-color: ${theme.colors.navyBlue};
    opacity: ${isActive ? "1" : ".8"};
    transform: ${isActive ? "translateY(5px)" : "translateY(0)"};
    color: ${theme.colors.white};
    position: relative;
    animation: ${move} 0.5s linear;
    transition: 0.3s;
    text-transform: uppercase;
    border-radius: 5px;
    &:hover {
      transform: translateY(5px);
    }
    &::after {
      transition: 0.3s;
      top: 5%;
      right: 5%;
      height: 5px;
      width: 5px;
      border-radius: 50%;
      background-color: ${theme.colors.white};
      opacity: ${isActive ? "1" : "0"};
    }
  `
);

export const PageButton = styled(Button)`
  height: 25px;
  width: 20px;
`;

export const LetterButton = styled(Button)`
  height: 35px;
  width: 35px;
  font-weight: 700;
`;
