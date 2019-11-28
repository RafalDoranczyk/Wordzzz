import styled, { css } from "styled-components";
import { Text as T } from "components/0-atoms/Text/styles";
import { Anchor as A } from "components/0-atoms/Anchor/styles";

export const Wrapper = styled.div`
  width: 100%;
  display: none;
  opacity: 0;
`;

export const TextBox = styled.div`
  margin: 30px auto 0 auto;
  max-width: 500px;
`;

export const GoodAnswersText = styled(T)`
  margin: 10px auto 30px auto;
`;

export const ResultsBox = styled.div`
  @media (orientation: landscape) and (min-width: 800px) {
    display: flex;
    flex-flow: row wrap;
  }
`;

export const SingleAnswerBox = styled.div(
  ({ theme, wasGuessed }) => css`
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-around;
    height: 120px;
    padding: 0 8px;
    width: 90vw;
    max-width: 300px;
    margin: 20px auto;
    background-color: ${theme.colors.lightBlack};
    border-radius: 5px;
    position: relative;
    box-shadow: 0 0 3px 3px
      ${wasGuessed ? theme.colors.green : theme.colors.red};
    ${wasGuessed ? theme.colors.green : theme.colors.red};
    color: ${theme.colors.darkWhite};
    @media (orientation: landscape) and (min-width: 800px) {
      flex-basis: 45%;
    }
    @media (min-width: 800px) {
      max-width: 450px;
    }
  `
);

export const IconContainer = styled.div(
  ({ wasGuessed, theme }) => css`
    ${theme.mixins.flex_center};
    position: absolute;
    top: 3%;
    right: 2%;
    height: 30px;
    width: 30px;
    & > svg {
      font-size: 25px;
      color: ${wasGuessed ? theme.colors.green : theme.colors.red};
    }
  `
);

export const Anchor = styled(A)`
  margin: 20px auto;
  cursor: pointer;
`;

export const Span = styled.span(
  ({ theme, wasGuessed, green }) => css`
    ${theme.mixins.flex_center};
    margin-left: 10px;
    font-weight: 700;
    font-size: 1.8rem;
    color: ${green || wasGuessed ? theme.colors.green : theme.colors.red};
    flex-basis: 120px;
  `
);

export const Text = styled(T)`
  display: flex;
  justify-content: space-between;
`;
