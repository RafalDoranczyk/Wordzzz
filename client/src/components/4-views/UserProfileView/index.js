import React from "react";
import * as S from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Caption from "components/1-molecules/Caption";
import UserPopup from "components/1-molecules/UserPopup/UserPopup";
import UserPopupProvider from "providers/UserPopupProvider/UserPopupProvider";

const UserMainView = ({
  email,
  displayName,
  allWordsNumber,
  knownWordsNumber
}) => {
  const profileContainersData = [
    {
      heading: "Liczba wszystkich słówek w bazie",
      text:
        "Liczba wszystkich słówek, które obecnie znajdują się w Twojej bazie słówek.",
      wordsLength: allWordsNumber,
      badgeColor: "blue"
    },
    {
      heading: "Ilość poznanych słówek",
      text:
        "Liczba wszystkich słówek, na które udało Ci się odpowiedzieć więcej niż 5 razy z rzędu rozwiązując test rankingowy.",
      wordsLength: knownWordsNumber,
      badgeColor: "green"
    },
    {
      heading: "Słówka nieopanowane",
      text:
        "Liczba wszystkich słówek, których jeszcze nie udało Ci się opanować. Wypełniaj testy rankingowe, aby to zmienić!",
      wordsLength: allWordsNumber - knownWordsNumber,
      badgeColor: "red"
    }
  ];

  const {
    isSpinnerShowed,
    messageToUser,
    isMessageSuccess,
    deleteAccount,
    handleInputChange,
    inputValues,
    changePassword,
    isPopupVisible,
    setPopupVisible,
    popupType,
    handlePopup
  } = UserPopupProvider();

  const profileContainersToRender = profileContainersData.map(
    ({ heading, text, wordsLength, badgeColor }, index) => (
      <S.AboutUserBaseBox color={badgeColor} key={index}>
        <S.Text bold center big>
          {heading}
        </S.Text>
        <S.Text center small>
          {text}
        </S.Text>
        <S.IconContainer color={badgeColor}>
          <FontAwesomeIcon icon='award' />
        </S.IconContainer>
        <S.Number color={badgeColor}>{wordsLength}</S.Number>
      </S.AboutUserBaseBox>
    )
  );

  return (
    <S.UserMainPage>
      <UserPopup
        setPopupVisible={setPopupVisible}
        isPopupVisible={isPopupVisible}
        messageToUser={messageToUser}
        isMessageSuccess={isMessageSuccess}
        isSpinnerShowed={isSpinnerShowed}
        inputValues={inputValues}
        handleInputChange={handleInputChange}
        deleteAccount={deleteAccount}
        changePassword={changePassword}
        popupType={popupType}
        handlePopup={handlePopup}
      />

      <Caption>Twój profil</Caption>

      <S.ProfileContainer>{profileContainersToRender}</S.ProfileContainer>

      <Caption>Informacje o koncie</Caption>
      <S.AboutAccountPanel>
        <S.Single>
          <S.Text>Nazwa użytkownika</S.Text>
          <S.Text> {displayName}</S.Text>
        </S.Single>

        <S.Single>
          <S.Text>Adres e-mail</S.Text>
          <S.Text>{email}</S.Text>
        </S.Single>

        <S.Single>
          <S.Text>Zmiana hasła</S.Text>
          <S.Btn onClick={() => handlePopup(true, "change")}>Zmień</S.Btn>
        </S.Single>

        <S.Single>
          <S.Text>Usunięcie konta</S.Text>
          <S.Btn
            deleteType
            onClick={() => {
              handlePopup(true, "delete");
            }}
          >
            Usuń
          </S.Btn>
        </S.Single>
      </S.AboutAccountPanel>
    </S.UserMainPage>
  );
};

export default UserMainView;
