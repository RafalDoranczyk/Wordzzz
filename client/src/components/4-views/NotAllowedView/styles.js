import styled, { css } from "styled-components";
import { BoxShadowBoard } from "components/0-atoms/BoxShadowBoard";
import { Link } from "react-router-dom";

export const NotAllowedView = styled(BoxShadowBoard)(
  ({ theme }) => css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    max-width: 500px;
    height: 300px;
    display: flex;
    flex-flow: column nowrap;
    padding: 20px 10px;
    text-align: center;
    color: ${theme.colors.darkWhite};
    background-color: ${theme.colors.lightBlack};
    & > h1 {
      margin: 50px 0;
      font-size: 1.8rem;
      text-transform: uppercase;
    }
    & > a {
      color: ${theme.colors.lightBlue};
      font-size: 1.5rem;
      transition: 0.2s linear transform;

      &:hover {
        transform: translateY(-5px);
        color: white;
      }
    }
  `
);
