import styled, { css } from "styled-components";
import { Button } from "components/0-atoms/Button/styles";

export const Box = styled.div`
  margin: 20px auto 0 auto;
`;

export const TestForm = styled.form`
  display: grid;
  gap: 10px;
  padding: 10px;
  justify-items: center;
  align-content: space-between;
  grid-template-rows: 40px 40px auto;
  box-shadow: 0 1px 1px 0 #c7c7c7 inset;
  background-color: ${({ theme }) => theme.colors.darkWhite};
`;

export const Label = styled.label`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.3rem;
  line-height: 160%;
  letter-spacing: 1px;
  & > input {
    width: 50px;
    margin-left: 10px;
    text-align: center;
  }
`;

export const Btn = styled(Button)(
  ({ isButtonVisible }) => css`
    align-self: flex-end;
    transition: 0.2s opacity ease-in;
    pointer-events: ${!isButtonVisible && "none"};
    opacity: ${!isButtonVisible && "0.3"};
  `
);
