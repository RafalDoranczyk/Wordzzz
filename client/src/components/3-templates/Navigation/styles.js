import styled, { css, keyframes } from "styled-components";

const ringBell = keyframes`
0%{
  transform: rotate(0deg)
}
5%{
 transform:  rotate(5deg)
}
10%{
  transform:rotate(-5deg)
}
15%{
  transform: rotate(5deg)
}
20%{
  transform: rotate(0deg)
}
100%{
  transform: rotate(0deg)
}
`;

export const Container = styled.div(
  ({ theme }) => css`
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
    box-shadow: 0 0 3px rgba(255, 255, 255, 0.5);
    z-index: 5;
    background-color: ${theme.colors.lightBlack};
    @media (orientation: landscape) and (min-width: 1000px) {
      height: 65px;
    }
  `
);

export const Inner = styled.div`
  max-width: 1400px;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 10px;
  margin: 0 auto;
`;

export const Navigation = styled.nav(
  ({ theme, isMenuShowed }) => css`
    height: 160px;
    width: 100%;
    padding: 5px 0;
    position: absolute;
    top: 100%;
    left: 0;
    transition: 0.2s ease-in opacity, 0.2s ease transform;
    transform: ${isMenuShowed ? "scaleY(1)" : "scaleY(0)"};
    transform-origin: top;
    opacity: ${isMenuShowed ? "1" : "0"};
    box-shadow: 0 0 3px rgba(255, 255, 255, 0.5);
    z-index: 3;
    background-color: ${theme.colors.lightBlack};
    @media (orientation: landscape) and (min-width: 1000px) {
      height: 100%;
      width: 950px;
      position: initial;
      opacity: 1;
      transform: scaleY(1);
      box-shadow: none;
      margin-left: auto;
    }
  `
);

export const List = styled.ul`
  height: 100%;
  width: 100%;
  display: flex;
  flex-flow: column wrap;
  justify-content: space-around;
  align-content: space-around;
  list-style: none;

  @media (orientation: landscape) and (min-width: 1000px) {
    flex-flow: row nowrap;
  }
`;

export const ListElement = styled.li`
  flex-basis: 26%;
  width: 45%;
  display: flex;
  padding-left: 5px;
  padding: 5px;
  align-items: center;
  box-shadow: 0 0 3px rgba(255, 255, 255, 0.5);
  cursor: pointer;
  @media (orientation: landscape) and (min-width: 1000px) {
    flex-flow: column nowrap;
    margin: 0 5px;
    box-shadow: none;
    border-right: 1px dotted white;
  }
`;

export const Anchor = styled.a(
  ({ theme }) => css`
    ${theme.mixins.flex_center};
    flex-grow: 1;
    text-align: center;
    height: 100%;
    font-size: 1.35rem;
    font-weight: 700;
    text-decoration: none;
    color: ${theme.colors.darkWhite};
    cursor: pointer;
    text-align-last: center;
    @media (orientation: landscape) and (min-width: 1000px) {
      font-size: 1.1rem;
      height: 45%;
      width: 100%;
    }
    &:hover {
      color: ${theme.colors.blue};
    }
  `
);

export const IconContainer = styled.div`
  ${({ theme }) => theme.mixins.flex_center};
  flex-basis: 30px;
  flex-shrink: 0;
  height: 100%;
  margin-left: 2px;
  font-size: 1.7rem;
  transition: 0.1s ease-in transform;
  color: ${({ theme }) => theme.colors.lightBlue};

  @media (orientation: landscape) and (min-width: 1000px) {
    margin-left: 0;
    height: 45%;
    width: 100%;
    font-size: 20px;
  }
`;
export const Bell = styled.a(
  ({ theme, wordsForRankedQuizNumber }) => css`
    flex-shrink: 0;
    margin: 0 30px 0 auto;
    color: ${theme.colors.darkWhite};
    font-size: 2.2rem;
    position: relative;
    transform-origin: top top;
    cursor: pointer;
    ${wordsForRankedQuizNumber > 0 &&
      css`
        animation: ${ringBell} 2.5s 2s linear alternate infinite;
      `}
    @media (orientation: landscape) and (min-width: 1000px) {
      margin-left: 45px;
    }
  `
);

export const RepeatNumber = styled.span(
  ({ theme }) => css`
    height: 18px;
    width: 18px;
    ${theme.mixins.flex_center};
    position: absolute;
    top: -8px;
    right: -7px;
    padding: 3px;
    border-radius: 50%;
    border: 2px solid ${theme.colors.lightBlack};
    background-color: ${theme.colors.lightRed};
    color: ${theme.colors.white};
    font-size: 1rem;
    font-weight: 700;
  `
);
