import styled, { css } from "styled-components";
import { Text as T } from "components/0-atoms/Text/styles";

export const UserMainPage = styled.div``;

export const ProfileContainer = styled.div(
  ({ theme }) => css`
    margin: 20px auto;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    @media (min-width: 800px) {
      flex-flow: row nowrap;
      justify-content: space-around;
    }
    @media ${theme.queries.iPadPro} {
      flex-flow: column nowrap;
      margin: 40px auto;
    }
    @media (min-height: 400px) and (orientation: portrait) {
      flex-flow: column nowrap;
    }
  `
);

export const AboutUserBaseBox = styled.div(
  ({ theme, color }) => css`
    flex-basis: 30%;
    width: 90%;
    max-width: 500px;
    height: 300px;
    padding: 10px;
    margin: 15px 0;
    border-radius: 5px;
    box-shadow: 0 0 2px 3px ${theme.colors[color]};
    background-color: ${theme.colors.lightBlack};
    color: ${theme.colors.white};
    transition: 0.3s linear transform;
    position: relative;
    cursor: pointer;
    &:hover {
      transform: scale(1.01);
    }
    @media (min-height: 600px) and (orientation: portrait) {
      flex-basis: 250px;
    }
    @media ${theme.queries.iPad} {
      flex-basis: 250px;
      max-width: 500px;
    }
    @media ${theme.queries.iPadPro} {
      flex-basis: 400px;
      max-width: 600px;
    }
  `
);

export const Text = styled(T)(
  ({ theme }) => css`
    margin: 10px 0;
    color: ${theme.colors.darkWhite};
  `
);

export const IconContainer = styled.div(
  ({ theme, color }) => css`
    position: absolute;
    bottom: 2%;
    right: 2%;
    ${theme.mixins.flex_center};
    height: 50px;
    width: 50px;
    font-size: 4rem;
    color: ${theme.colors[color]};
  `
);

export const Number = styled.span(
  ({ theme, color }) => css`
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0);
    font-weight: 700;
    font-size: 3.5rem;
    letter-spacing: 1px;
    color: ${theme.colors[color]};
    @media ${theme.queries.iPadPro} {
      font-size: 4.5rem;
    }
  `
);

export const AboutAccountPanel = styled.div(
  ({ theme }) => css`
    margin: 20px auto;
    @media (orientation: landscape) {
      display: flex;
      flex-flow: row wrap;
      justify-content: space-around;
    }
    @media ${theme.queries.iPadPro} {
      margin: 40px auto;
    }
  `
);

export const Single = styled.div(
  ({ theme }) => css`
    height: 55px;
    width: 300px;
    margin: 15px auto;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 2px;
    box-shadow: 0 1px 4px ${theme.colors.lightBlue},
      0 0 4px ${theme.colors.lightBlue};
    background-color: ${theme.colors.lightBlack};
    color: ${theme.colors.darkWhite};

    @media (orientation: landscape) {
      flex-basis: 49%;
      max-width: 340px;
    }
    @media ${theme.queries.iPad} {
      height: 70px;
      width: 450px;
    }
    @media ${theme.queries.iPadPro} {
      height: 100px;
      margin: 20px auto;
      width: 700px;
    }
    @media (orientation: landscape) and (min-width: 1000px) {
      max-width: 45%;
    }
  `
);

export const Btn = styled.button(
  ({ theme, deleteType }) => css`
    flex-basis: 80px;
    height: 90%;
    border: 1px solid ${theme.colors.lightBlue};
    color: white;
    &:hover {
      color: white;
      background-color: ${theme.colors.lightBlue};
    }
    ${deleteType &&
      css`
        border: 1px solid ${theme.colors.red};
        &:hover {
          background-color: ${theme.colors.red};
        }
      `};
    @media ${theme.queries.iPad} {
      font-size: 1.7rem;
      flex-basis: 120px;
    }
  `
);
