import styled, { css, keyframes } from "styled-components";
import { Button } from "components/0-atoms/Button/styles";
import { TranslationInput } from "components/1-molecules/FireBoardTranslations/styles";
import { DeleteButton } from "components/1-molecules/FireBoardHeading/styles";
const move = keyframes`
from{
 
opacity: 0;
transform: translateY(15px);
}
to{
transform: translateY(0)
}
`;

export const SingleFirebaseBoard = styled.div(
  ({ theme, isActive, isWordKnown }) => css`
    display: grid;
    animation: ${move} 0.5s linear;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 40px 1fr;
    grid-column-gap: 5px;
    letter-spacing: 1px;
    z-index: 1;
    transition: 0.3s ease transform;
    cursor: pointer;
    position: relative;
    &::after {
      z-index: -1;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background-color: ${({ theme }) => theme.colors.navyBlue};
      opacity: 0.8;
      border-radius: 5px;
    }
    &:hover {
      transform: scale(1.01);
      box-shadow: 1px 0 1px 0 ${theme.colors.lightBlue};
    }
    &:hover ${DeleteButton} {
      transform: scale(1);
    }
    ${isActive &&
      css`
        & ${TranslationInput} {
          background-color: ${theme.colors.gray};
          color: ${theme.colors.black};
        }
      `}
  `
);

export const SaveButton = styled(Button)`
  position: absolute;
  bottom: 5px;
  right: 5px;
  transition: 1s linear all;
  animation: ${move} 0.3s ease-in;
`;
