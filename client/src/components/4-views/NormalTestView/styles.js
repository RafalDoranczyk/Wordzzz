import styled, { css } from "styled-components";
import { Button } from "components/0-atoms/Button/styles";
import { Text as T } from "components/0-atoms/Text/styles";

export const TestView = styled.div`
  max-width: 700px;
  margin: 0 auto;
  padding: 0;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;

export const Board = styled.div`
  transform: translateY(0) scale(0);
`;
export const EndTestButton = styled(Button)(
  ({ theme, isEndTestButtonVisible }) => css`
    opacity: ${isEndTestButtonVisible ? "1" : "0"};
    transform: ${isEndTestButtonVisible
      ? "translateY(45px)"
      : "translateY(65px)"};
    visibility: ${!isEndTestButtonVisible && "hidden"};
    transition: 0.3s ease-in all;
    &:hover {
      color: ${theme.colors.lightBlue};
      background-color: ${theme.colors.white};
      transform: translateY(40px);
      box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    }
    margin-bottom: 15px;
  `
);

export const ProgressContainer = styled.div`
  height: 50px;
  width: 100%;
  border: 1px solid darken(#eee, 6%);
  box-shadow: 0 0 40px rgba(black, 0.05);
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Progress = styled.progress(
  ({ theme }) => css`
    width: 100%;
    display: none;
    height: 30px;
    border-radius: 50%;
    &::-webkit-progress-bar {
      background-color: ${theme.colors.darkWhite};
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25) inset;
      border-radius: 20px;
      overflow: hidden;
    }
    &::-webkit-progress-value {
      background-color: ${theme.colors.lightBlue};
    }
  `
);

export const Text = styled(T)`
  margin-top: 30px;
`;
