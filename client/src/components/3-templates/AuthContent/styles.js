import styled, { css } from "styled-components";
import { BoxShadowBoard } from "components/0-atoms/BoxShadowBoard";
import { AuthForm } from "components/2-organisms/AuthForm/styles";

export const AuthContent = styled(BoxShadowBoard)(
  ({ theme }) => css`
    ${theme.mixins.grid_gap(15)};
    height: 500px;
    width: 95vw;
    padding: 10px;
    transition: 0.3s;
    background-color: ${theme.colors.lightBlack};
    @media (orientation: portrait) {
      max-width: 420px;
      grid-template-rows: 140px 250px 65px;
    }

    @media (${theme.queries.smartphone_landscape}) {
      gap: 25px;
      max-width: 550px;
      height: 310px;
      grid-template-rows: 160px auto 80px;
      grid-template-columns: 1fr 0.8fr;

      & > ${AuthForm} {
        grid-column: 2/-1;
        grid-row: 1/-1;
      }
      & > ${AuthButtonsSection} {
        grid-row: 3;
      }
    }
    @media (min-width: 800px) and (min-height: 600px) {
      grid-template-columns: 1fr;
      height: 600px;
      & > ${AuthForm} {
        grid-column: initial;
        grid-row: initial;
      }
    }
  `
);

export const MottoBox = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  color: ${({ theme }) => theme.colors.darkWhite};
`;

export const MottoHeading = styled.p(
  ({ theme }) => css`
    font-weight: 700;
    font-size: 1.7rem;
    color: ${theme.colors.green};
  `
);

export const Motto = styled.p(
  ({ theme }) => css`
    width: 95%;
    font-size: 1.3rem;
    letter-spacing: 1px;
    text-align-last: center;
    text-align: justify;
    @media (${theme.queries.smartphone_landscape}) {
      font-size: 1.2rem;
    }
    @media (min-width: 800px) and (min-height: 600px) {
      width: 80%;
    }
  `
);

export const Author = styled.p`
  font-style: italic;
  position: relative;
  font-size: 1.3rem;
`;

export const SpanLine = styled.span(
  ({ theme, left, right }) => css`
    position: absolute;
    top: 50%;
    width: 15px;
    height: 2px;
    background-color: ${theme.colors.lightBlue};
    ${left &&
      css`
        left: -40px;
      `}
    ${right &&
      css`
        right: -40px;
      `}
  `
);

export const AuthButtonsSection = styled.div`
  display: flex;
  align-items: center;
  flex-flow: column nowrap;
  justify-content: space-around;
`;
