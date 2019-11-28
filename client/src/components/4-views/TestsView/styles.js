import styled, { css } from "styled-components";
import { Anchor as A } from "components/0-atoms/Anchor/styles";

export const TestsView = styled.div``;

const TextDiv = styled.div(
  ({ theme }) => css`
    margin: 20px auto;
    max-width: 650px;
    text-align: justify;
    & > div {
      margin: 20px 0;
    }
    & > p {
      padding: 10px;
    }
    @media (orientation: landscape) and (min-width: 800px) {
      & > p {
        padding: 25px;
      }
    }
  `
);

export const NormalTest = styled(TextDiv)``;

export const RankedTest = styled(TextDiv)`
  margin: 60px auto 0 auto;
`;

export const Anchor = styled(A)(
  ({ theme }) => css`
    background: ${theme.colors.green};
    width: 160px;
    margin: 20px auto;
    padding: 4px 0;
    border-radius: 3px;
    font-size: 1.6rem;
    letter-spacing: 1px;
    text-decoration: none;
    padding: 8px;
    text-align: center;
    position: relative;
    color: ${theme.colors.white};
    cursor: pointer;
    box-shadow: 0 0 2px 2px ${theme.colors.blue};
    z-index: 3;
  `
);
