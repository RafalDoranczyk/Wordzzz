import styled, { css } from "styled-components";
import { BoxShadowBoard } from "components/0-atoms/BoxShadowBoard";

export const MongoWordCard = styled(BoxShadowBoard)(
  ({ theme }) => css`
    display: flex;
    flex-flow: column nowrap;
    padding: 10px 5px;
    position: relative;
    background-color: ${theme.colors.lightBlack};

    &:hover > ${AddMongoWordButton} {
      transform: scale(1) translateY(-50%);
    }

    &:hover::after {
      opacity: 1;
      transition: 0.25s opacity ease;
    }

    &::after {
      bottom: 0;
      right: 0;
      height: 35px;
      width: 35px;
      border-top-left-radius: 50%;
      background-color: ${theme.colors.darkWhite};
      opacity: 0;
    }
  `
);

export const CardHeading = styled.p(
  ({ theme }) => css`
    text-align: center;
    flex-basis: 15%;
    font-size: 14px;
    font-weight: 700;
    text-transform: lowercase;
    box-shadow: 0 2px 0 0 ${theme.colors.lightBlue};
    color: ${theme.colors.white};
    &::first-letter {
      text-transform: uppercase;
    }
  `
);

export const MongoTranslations = styled.ul`
  display: flex;
  flex-flow: column nowrap;
  font-size: 12px;
  flex-grow: 1;
  margin-top: 5px;
  list-style-type: square;
  list-style-position: inside;
`;

export const SingleTranslation = styled.li(
  ({ theme }) => css`
    margin-top: 10px;
    color: ${theme.colors.darkWhite};
  `
);

export const AddMongoWordButton = styled.button(
  ({ theme }) => css`
    position: absolute;
    transition: 0.3s transform ease, 0.3s opacity ease;
    bottom: 0;
    right: 5px;
    height: 15px;
    width: 20px;
    transform: scale(0) translateY(-50%);
    color: ${theme.colors.blue};
    opacity: 0.4;
    z-index: 2;
    &:hover {
      opacity: 1;
    }
  `
);
