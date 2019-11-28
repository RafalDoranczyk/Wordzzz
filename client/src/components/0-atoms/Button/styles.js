import styled, { css } from "styled-components";

export const Button = styled.button(
  ({ theme, primary, secondary, textButton, small, medium }) => css`
    width: ${small ? " 60px" : medium ? "90px" : "140px"};
    height: ${small ? " 20px" : "30px"};
    font-size: ${small ? "10px" : "14px"};
    transition-duration: 0.3s;
    transition-timing-function: ease;
    color: ${theme.colors.lightBlue};
    letter-spacing: 1px;
    &:hover {
      color: ${theme.colors.blue};
    }

    ${primary &&
      css`
        box-shadow: 0 0 2px 2px ${theme.colors.blue};
        background-color: ${theme.colors.darkWhite};
        border-radius: 3px;
        transition-property: color, background-color;
        font-weight: 700;

        &:hover {
          color: ${theme.colors.white};
          background-color: ${theme.colors.blue};
        }
      `};

    ${secondary &&
      css`
        background-color: ${theme.colors.blue};
        color: ${theme.colors.darkWhite};
        border-radius: 20px;
        height: 40px;
      `};

    ${textButton &&
      css`
        width: auto;
        &:hover {
          transform: translateY(-3px);
        }
      `};
  `
);
