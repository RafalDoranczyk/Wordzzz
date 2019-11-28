import styled, { css, keyframes } from "styled-components";
import { Text as T } from "components/0-atoms/Text/styles";

const move = keyframes`
from{
  transform: translateY(0);
}
to{
  transform: translateY(-8px);
}
`;

export const Caption = styled.div(
  ({ theme }) => css`
    margin: 0 auto;
    height: 35px;
    max-width: 650px;
    animation: ${move} 2s linear infinite alternate;
    position: relative;
    transform: skew(-3deg);
    &::before,
    &::after {
      z-index: -1;
      width: 50px;
      height: 100%;
      transform: skewY(8deg);
      border-radius: 4px;
    }
    &::before {
      background: ${theme.colors.lightBlack};
      left: 0;
      bottom: -4px;
      background-image: -webkit-linear-gradient(
        right,
        transparent 0%,
        rgba(0, 0, 0, 0.4) 100%
      );
    }
    &::after {
      background-image: -webkit-linear-gradient(
        left,
        transparent 0%,
        rgba(0, 0, 0, 0.4) 100%
      );
      background: ${theme.colors.lightBlack};
      right: 0;
      top: -4px;
    }
    @media ${theme.queries.iPad} {
      height: 45px;
    }
    @media ${theme.queries.iPadPro} {
      height: 75px;
    }
    @media (orientation: landscape) and (min-width: 1000px) {
      height: 50px;
    }
  `
);

export const Text = styled(T)(
  ({ theme }) => css`
    height: 100%;
    padding: 5px 10px;
    ${theme.mixins.flex_center};
    background-color: ${theme.colors.lightBlack};
    color: ${theme.colors.white};
    letter-spacing: 1px;
    box-shadow: 0 0 0 1px ${theme.colors.lightBlack} inset,
      0 0 20px -5px ${theme.colors.lightBlack},
      0 0 0px 3px ${theme.colors.darkWhite} inset;
    position: relative;
  `
);
