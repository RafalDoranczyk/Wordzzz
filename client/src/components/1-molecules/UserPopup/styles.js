import styled, { css } from "styled-components";
import { Button } from "components/0-atoms/Button/styles";

export const UserPopup = styled.div(
  ({ theme, popupType }) => css`
    position: fixed;
    top: calc(50% + 25px);
    left: 50%;
    height: 230px;
    width: 300px;
    padding: 20px 0;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-around;
    align-items: center;
    border-radius: 5px;
    box-shadow: 0px 5px 3px rgba(0, 0, 0, 0.12), 0 5px 2px rgba(0, 0, 0, 0.24);
    transform: translate(-50%, -50%) scale(0);
    z-index: 1;
    background-color: ${theme.colors.darkWhite};

    ${popupType === "delete" &&
      css`
        height: 200px;
      `};

    @media (orientation: landscape) {
      padding: 10px;
      width: 340px;
    }
  `
);

export const Btn = styled.button`
  position: absolute;
  top: 3%;
  right: 3%;
  height: 25px;
  width: 25px;
  color: ${({ theme }) => theme.colors.red};
  font-size: 1.5rem;
`;

export const Heading = styled.p`
  font-size: 1.6rem;
  font-weight: 700;
  margin: 10px 0;
`;

export const Form = styled.form`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: space-around;
  width: 80%;
  height: 170px;

  & > input {
    height: 35px;
  }
  & > button {
    width: 60%;
  }
`;

export const ConfirmButton = styled(Button)(
  ({ theme, deleteType }) => css`
    width: 120px;
    ${deleteType &&
      css`
        background-color: ${theme.colors.red};
        color: ${theme.colors.white};
        margin: 15px 0;
      `}
  `
);
