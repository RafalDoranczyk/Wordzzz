import styled, { keyframes, css } from "styled-components";

const animationSpin = keyframes`
  0% { transform: rotate(0deg) }
  100% { transform: rotate(360deg) }
`;

export const Spinner = styled.div(
  ({ theme, fixed }) => css`
    animation: ${animationSpin} 1.5s linear infinite;
    border: 6px solid ${theme.colors.lightestBlack};
    border-top: 6px solid ${theme.colors.white};
    border-radius: 50%;
    width: 40px;
    height: 40px;
    position: absolute;
    top: calc(50% - 20px);
    left: calc(50% - 20px);
    z-index: 2;
    ${fixed &&
      css`
        position: fixed;
        top: calc(50vh - 20px);
        left: calc(50vw - 20px);
      `}
  `
);

export const Wrap = styled.div(
  ({ theme }) => css`
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: ${theme.colors.lightBlack};
    z-index: 100;
    position: fixed;
    opacity: 0.2;
  `
);
