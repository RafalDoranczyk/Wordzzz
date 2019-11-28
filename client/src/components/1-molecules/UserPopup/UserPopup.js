import React, { useRef, useEffect } from "react";
import * as S from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Text from "components/0-atoms/Text";
import Input from "components/0-atoms/Input";
import Spinner from "components/0-atoms/Spinner";
import UseDetectOutsideClick from "hooks/useDetectOutsideClick";
import { TweenMax } from "gsap";
import MessageToUser from "components/0-atoms/MessageToUser";

const UserPopup = ({
  popupType,
  setPopupVisible,
  isPopupVisible,
  messageToUser,
  isMessageSuccess,
  isSpinnerShowed,
  inputValues,
  handleInputChange,
  deleteAccount,
  changePassword
}) => {
  const myRef = useRef(null);

  UseDetectOutsideClick(myRef, setPopupVisible);

  useEffect(() => {
    if (isPopupVisible) {
      TweenMax.to(myRef.current, 0.1, { scale: 1, y: 10 });
    } else {
      TweenMax.to(myRef.current, 0.1, { scale: 0 });
    }
  });

  return (
    <S.UserPopup
      isPopupVisible={isPopupVisible}
      popupType={popupType}
      ref={myRef}
    >
      <S.Heading>
        {popupType === "delete" ? "Usuń konto" : "Zmień hasło"}
      </S.Heading>
      <S.Btn onClick={() => setPopupVisible(false)}>
        <FontAwesomeIcon icon='window-close' />
      </S.Btn>
      <MessageToUser isMessageSuccess={isMessageSuccess}>
        {messageToUser}
      </MessageToUser>

      {isSpinnerShowed && <Spinner />}

      {popupType === "delete" ? (
        <>
          <Text>Czy na pewno chcesz usunąć konto?</Text>
          <S.ConfirmButton
            deleteType
            primary
            onClick={e => deleteAccount(e)}
            medium
          >
            Usuń konto
          </S.ConfirmButton>
        </>
      ) : (
        <S.Form>
          <Input
            type='text'
            onChange={handleInputChange}
            value={inputValues["newPassword"]}
            name='newPassword'
            placeholder='Wpisz nowe hasło'
          />
          <Input
            type='text'
            onChange={handleInputChange}
            value={inputValues["repeatPassword"]}
            name='repeatPassword'
            placeholder='Powtórz nowe hasło'
          />
          <S.ConfirmButton primary onClick={e => changePassword(e)} medium>
            Zmień hasło
          </S.ConfirmButton>
        </S.Form>
      )}
    </S.UserPopup>
  );
};

export default UserPopup;
