import React from "react";
import PropTypes from "prop-types";
import * as S from "./styles";
import Text from "components/0-atoms/Text";
import Spinner from "components/0-atoms/Spinner";
import Span from "components/0-atoms/Span";
import Input from "components/0-atoms/Input";
import Caption from "components/1-molecules/Caption";
import MongoWordsTemplate from "components/3-templates/MongoWordsTemplate";
import MongoWordsProvider from "providers/MongoWordsProvider/MongoWordsProvider";

const MongoWordsView = ({ wordsAlreadyHad }) => {
  const {
    inputValue,
    filterForWords,
    messageToUser,
    filteredWords,
    isSpinnerShowed,
    addWordToUserBase
  } = MongoWordsProvider(wordsAlreadyHad);

  return (
    <S.MongoWordsView>
      {isSpinnerShowed && <Spinner fixed />}
      <S.TextContainer>
        <Caption>Baza słówek użytkowników</Caption>
        <Text justify>
          Tutaj znajdziesz listę wszystkich słówek, które zostały dodane przez
          użytkowników i<Span bold> nie znajdują się w Twojej bazie. </Span>
          Kliknij na interesujące Cię słówko lub przeszukuj bazę wpisując litery
          w polu poniżej. Po kliknięciu na słówko możesz je dodać do Twojej bazy
          poprzez przycisk, który się pojawi. Jeżeli nie widzisz żadnych słówek,
          może to oznaczać, że są one już w Twojej bazie.
        </Text>
      </S.TextContainer>
      {filteredWords && (
        <>
          <S.InputContainer>
            <Input
              name='searchBase'
              type='text'
              value={inputValue}
              onChange={e => filterForWords(e)}
              placeholder='Przeszukuj bazę...'
            />
          </S.InputContainer>
          <Text bold center color='green' big>
            {messageToUser}
          </Text>

          <MongoWordsTemplate
            mongoWords={filteredWords}
            addWordToUserBase={addWordToUserBase}
          />
        </>
      )}
    </S.MongoWordsView>
  );
};

MongoWordsView.propTypes = {
  wordsAlreadyHad: PropTypes.array.isRequired
};

export default MongoWordsView;
