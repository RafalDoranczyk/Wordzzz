import styled, { css } from "styled-components";
import { MessageToUser } from "components/0-atoms/MessageToUser/styles";

export const AddOwnWordSection = styled.div`
  display: grid;
  height: 320px;
  margin: 0 auto;
  grid-template-rows: 80px 1fr;
  position: relative;
  &::before,
  &::after {
    top: 40px;
    bottom: 15px;
    width: 2px;
    background-color: ${({ theme }) => theme.colors.lightBlue};
  }
  &::before {
    left: 0;
  }
  &::after {
    right: 0;
  }
`;

export const FormTitle = styled.div(
  ({ theme }) => css`
    ${theme.mixins.flex_center};
    width: 82.5%;
    font-weight: 700;
    margin: 0 auto;
    position: relative;
    text-align: center;
    font-size: 1.4rem;
    color: ${theme.colors.blue};
    &::after,
    &::before {
      height: 2px;
      top: 50%;
      width: 10%;
      background-color: ${({ theme }) => theme.colors.lightBlue};
    }
    &::before {
      left: -10%;
    }
    &::after {
      right: -10%;
    }
  `
);

export const Message = styled(MessageToUser)(
  ({ theme }) => css`
    ${theme.mixins.flex_center};
    position: absolute;
    top: -20px;
    width: 100%;

    text-align: center;
  `
);
