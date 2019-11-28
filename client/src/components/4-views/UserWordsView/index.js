import React from "react";
import Spinner from "components/0-atoms/Spinner";
import Text from "components/0-atoms/Text";
import UserWords from "components/3-templates/UserWords";
import LettersToFilter from "components/2-organisms/LettersToFilter";
import * as S from "./styles";
import PropTypes from "prop-types";
import UserWordsProvider from "providers/UserWordsProvider/UserWordsProvider";
import Span from "components/0-atoms/Span";
import Input from "components/0-atoms/Input";
import Caption from "components/1-molecules/Caption";

const UserWordsView = () => {
  const {
    isSpinnerShowed,
    editBoardhandler,
    lettersToFilter,
    onLetterClick,
    filterInputValue,
    handleInputValueFilter,
    removeBoard,
    isUserDataReady,
    onTranslationChange,
    isSaveButtonVisible,
    activeLetter,
    pageNumbersToFilter,
    onPageNumberClick,
    wordsToRender,
    activePageNumber,
    renderedWordsLength,
    pickedBoardToEdit,
    onTranslationSave,
    handleButtonVisible,
    onDeleteBoard
  } = UserWordsProvider();

  return (
    <S.UserWordsView>
      <Caption>Moje postępy</Caption>
      <S.TextBox>
        <Text justify>
          W tym miejscu możesz przyjrzeć się każdemu słówko w Twojej bazie.
          Sprawdź, z jakimi słówkami masz problemy a które już dobrze znasz. Po
          kliknięciu na wybrane słówko możesz
          <Span bold> zresetować </Span>wszystkie odpowiedzi,
          <Span bold> usunąć </Span>
          słówko z bazy lub <Span bold>edytować</Span> jego tłumaczenia.
          Usunięcie słówka, jeżeli było ono już przez Ciebie poznane, nie będzie
          miało wpływu na Twój łączny wynik poznanych słówek.
        </Text>
      </S.TextBox>
      <Caption>Filtruj Słówka</Caption>
      <S.FilterBox>
        <S.TextBox>
          <Text justify>
            Kliknij na literę, aby wyfiltrować słówka lub wpisz je w
            wyszukiwarce poniżej.
          </Text>
        </S.TextBox>

        {isUserDataReady ? (
          <>
            <LettersToFilter
              activePageNumber={activePageNumber}
              activeLetter={activeLetter}
              lettersToFilter={lettersToFilter}
              pageNumbersToFilter={pageNumbersToFilter}
              onLetterClick={onLetterClick}
              onPageNumberClick={onPageNumberClick}
            />
            <S.InputContainer>
              <Input
                type='text'
                name='searchWord'
                placeholder='Wpisz szukane słówko'
                value={filterInputValue}
                onChange={e => handleInputValueFilter(e)}
              />
            </S.InputContainer>
            <Text color='lightBlack' big center bold>
              Znaleziono słówek: {renderedWordsLength || 0}
            </Text>
          </>
        ) : (
          <Spinner />
        )}
      </S.FilterBox>
      <UserWords
        isSpinnerShowed={isSpinnerShowed}
        handleButtonVisible={handleButtonVisible}
        onTranslationSave={onTranslationSave}
        pickedBoardToEdit={pickedBoardToEdit}
        editBoardhandler={editBoardhandler}
        onTranslationChange={onTranslationChange}
        removeBoard={removeBoard}
        onDeleteBoard={onDeleteBoard}
        wordsToRender={wordsToRender}
        isSaveButtonVisible={isSaveButtonVisible}
      />
    </S.UserWordsView>
  );
};

UserWordsView.propTypes = {
  userWords: PropTypes.array,
  isUserDataReady: PropTypes.bool
};

export default UserWordsView;
