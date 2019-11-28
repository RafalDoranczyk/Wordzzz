import React, { useRef } from "react";
import * as S from "./styles";

import FireBoardHeading from "components/1-molecules/FireBoardHeading";
import FireBoardTranslations from "components/1-molecules/FireBoardTranslations";
import FireBoardResults from "components/1-molecules/FireBoardResults";
import Spinner from "components/0-atoms/Spinner";
import UseDetectOutsideClick from "hooks/useDetectOutsideClick";

const SingleFirebaseBoard = ({
  fireKey,
  wordToTranslate,
  translations,
  allAnswers,
  created,
  onTranslationSave,
  goodAnswers,
  lastOccurenceInQuiz,
  onTranslationChange,
  isSaveButtonVisible,
  editBoardhandler,
  handleButtonVisible,
  pickedBoardToEdit,
  isSpinnerShowed,
  onDeleteBoard
}) => {
  const isWordKnown = goodAnswers >= 5;
  const boardRef = useRef(null);
  const ifBoardWasEdited = isSaveButtonVisible && fireKey === pickedBoardToEdit;

  const handler = () => {
    editBoardhandler("");
    handleButtonVisible(false);
  };

  UseDetectOutsideClick(boardRef, handler);

  return (
    <S.SingleFirebaseBoard
      ref={boardRef}
      isActive={pickedBoardToEdit === fireKey}
      onClick={() => {
        editBoardhandler(fireKey);
      }}
      tabIndex='1'
    >
      {(ifBoardWasEdited && isSpinnerShowed) ||
        (isSpinnerShowed && <Spinner />)}
      <FireBoardHeading
        isWordKnown={isWordKnown}
        onDeleteBoard={() => onDeleteBoard(fireKey)}
        wordToTranslate={wordToTranslate}
      />
      <FireBoardTranslations
        pickedBoardToEdit={pickedBoardToEdit}
        onTranslationChange={onTranslationChange}
        fireKey={fireKey}
        translations={translations}
      />
      <FireBoardResults
        isWordKnown={isWordKnown}
        allAnswers={allAnswers}
        created={created}
        goodAnswers={goodAnswers}
        lastOccurenceInQuiz={lastOccurenceInQuiz}
      />
      {ifBoardWasEdited && (
        <S.SaveButton
          primary
          isSaveButtonVisible={isSaveButtonVisible}
          onClick={() => onTranslationSave(fireKey)}
        >
          Zapisz
        </S.SaveButton>
      )}
    </S.SingleFirebaseBoard>
  );
};

export default SingleFirebaseBoard;
