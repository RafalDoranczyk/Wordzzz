import React from "react";
import * as S from "./styles";
import SingleFirebaseBoard from "components/2-organisms/SingleFirebaseBoard";
import PropTypes from "prop-types";

const UserWords = ({
  wordsToRender,
  removeBoard,
  onTranslationChange,
  isSaveButtonVisible,
  editBoardhandler,
  pickedBoardToEdit,
  onTranslationSave,
  handleButtonVisible,
  isSpinnerShowed,
  onDeleteBoard
}) => {
  const firebaseBoards = wordsToRender.map(
    ({
      wordToTranslate,
      translation_0,
      translation_1,
      translation_2,
      translation_3,
      translation_4,
      translation_5,
      allAnswers,
      created,
      goodAnswers,
      lastOccurenceInQuiz,
      fireKey
    }) => {
      return (
        <SingleFirebaseBoard
          key={fireKey}
          fireKey={fireKey}
          wordToTranslate={wordToTranslate}
          translations={[
            translation_0,
            translation_1,
            translation_2,
            translation_3,
            translation_4,
            translation_5
          ]}
          allAnswers={allAnswers}
          created={created}
          onTranslationSave={onTranslationSave}
          goodAnswers={goodAnswers}
          lastOccurenceInQuiz={lastOccurenceInQuiz}
          removeBoard={removeBoard}
          onTranslationChange={onTranslationChange}
          isSaveButtonVisible={isSaveButtonVisible}
          editBoardhandler={editBoardhandler}
          handleButtonVisible={handleButtonVisible}
          pickedBoardToEdit={pickedBoardToEdit}
          isSpinnerShowed={isSpinnerShowed}
          onDeleteBoard={onDeleteBoard}
        />
      );
    }
  );
  return <S.UserWords>{firebaseBoards}</S.UserWords>;
};

UserWords.propTypes = {
  userWords: PropTypes.array
};

export default UserWords;
