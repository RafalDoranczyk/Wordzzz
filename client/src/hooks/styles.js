import styled, { css, keyframes } from "styled-components";

const wordMove = ({ rotate, containerHeight }) =>
  keyframes`
  0%{
  transform: translatateY(0);
    }
  99%{
  transform: ${`translateY(calc(${containerHeight} + 40vh)) rotate(${rotate}deg)`};
    }
  100%{
  opacity: 0;
  transform: translateY(0)
    }
`;

export const DroppingWordsStyle = styled.span(
  ({ theme, delay, leftPosition, topStartPosition, color }) => css`
    position: absolute;
    left: ${`${leftPosition}%`};
    top: ${`-${topStartPosition}%`};
    animation: ${props => wordMove(props)} 10s linear infinite both;
    animation-delay: ${`${delay}s`};
    color: ${theme.colors[color]};
    font-size: 20px;
  `
);

export const Container = styled.div(
  ({ containerHeight, containerWidth }) => css`
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    height: ${containerHeight};
    width: ${containerWidth};
    overflow: hidden;
    z-index: -10;
    pointer-events: none;
  `
);
