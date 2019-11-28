import styled, { css } from "styled-components";
import { IconButton } from "components/0-atoms/IconButton/styles";
import { Text } from "components/0-atoms/Text/styles";

export const FireBoardHeading = styled.div(
  ({ theme, isWordKnown }) => css`
    grid-column: 1/-1;
    ${theme.mixins.flex_center};
    position: relative;

    &::after {
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      opacity: 0.6;
      background-color: ${theme.colors.navyBlue};
    }
  `
);

export const WordToTranslate = styled(Text)(
  ({ theme }) => css`
    margin-left: auto;
    color: ${theme.colors.white};
    &::first-letter {
      text-transform: uppercase;
    }
  `
);

export const DeleteButton = styled(IconButton)`
  margin: 0 15px 0 auto;
  transform: scale(0);
  transition: 0.1s ease-in transform;
`;

export const IsWordKnownIcon = styled.span(
  ({ theme, isWordKnown }) => css`
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    font-size: 1.5rem;
    color: ${isWordKnown ? theme.colors.lightGreen : theme.colors.red};
  `
);
