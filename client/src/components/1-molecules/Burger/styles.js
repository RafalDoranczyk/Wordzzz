import styled, { css } from "styled-components";

export const MenuIconButton = styled.button`
  width: 25px;
  height: 25px;
  position: relative;
  overflow: hidden;
  @media (orientation: landscape) and (min-width: 1000px) {
    display: none;
  }
`;

export const SingleBar = styled.span(
  ({ theme, isMenuShowed }) => css`
    position: absolute;
    height: 4px;
    width: 100%;
    border-radius: 10px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: 0.25s ease-in-out;
    background-color: ${theme.colors.gray};
    :nth-child(1) {
      top: ${isMenuShowed ? "50%" : "0"};
      transform: ${isMenuShowed && "rotate(135deg)"};
    }
    :nth-child(2) {
      top: 50%;
      transform: ${isMenuShowed ? "translateY(0)" : "translateY(-50%)"};
      opacity: ${isMenuShowed && "0"};
      left: ${isMenuShowed && "-40px"};
    }
    :nth-child(3) {
      top: ${isMenuShowed ? "50%" : "100%"};
      transform: ${isMenuShowed ? " rotate(-135deg) " : "translateY(-100%)"};
    }
  `
);
