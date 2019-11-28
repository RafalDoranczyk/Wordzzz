import React, { useEffect, useState } from "react";
import * as S from "../NormalTestView/styles";
import Caption from "components/1-molecules/Caption";
import TestForm from "components/3-templates/TestForm";
import DrawnWord from "components/3-templates/DrawnWord";
import TestEndContent from "components/3-templates/TestEndContent";
import TestProvider from "providers/TestProvider/TestProvider";
import firebase from "providers/Firebase";

const RankedTestView = ({ wordsForRankedQuiz }) => {
  const {
    captionRef,
    formBoxRef,
    wordBoardRef,
    alldrawnWordsNumber,
    getCurrentWordIndex,
    onFirstFormSubmit,
    wordToTranslate,
    lettersToClick,
    userAnswer,
    clickNextButtonHandler,
    onLetterClick,
    isNextButtonVisible,
    isEndTestButtonVisible,
    onTestEndButtonClick,
    isTestEnd,
    testEndContentRef,
    wordsForTestResult,
    loadingRef,
    loadingRefContainer,
    allDrawnWords
  } = TestProvider(wordsForRankedQuiz);

  const saveResultsToFirebase = () => {
    const now = new Date().getTime();

    allDrawnWords.forEach(word => {
      firebase.db
        .ref(`users/${firebase.auth.currentUser.uid}/words/${word.fireKey}`)
        .update({
          allAnswers: word.allAnswers + 1,
          goodAnswers: word.wasGuessed && word.goodAnswers + 1,
          lastOccurenceInQuiz: now
        });
    });
  };

  const onTestEnd = () => {
    saveResultsToFirebase();
    onTestEndButtonClick();
  };

  return (
    <S.TestView>
      <Caption captionRef={captionRef}>
        {alldrawnWordsNumber > 0
          ? `Słówko ${getCurrentWordIndex() + 1} / ${alldrawnWordsNumber}`
          : "Test rankingowy"}
      </Caption>
      <TestForm
        formBoxRef={formBoxRef}
        onSubmit={onFirstFormSubmit}
        wordsLength={wordsForRankedQuiz.length}
      />

      <S.Board ref={wordBoardRef}>
        {alldrawnWordsNumber > 0 && (
          <>
            <DrawnWord
              wordToTranslate={wordToTranslate}
              lettersToClick={lettersToClick}
              userAnswer={userAnswer}
              clickNextButtonHandler={clickNextButtonHandler}
              onLetterClick={onLetterClick}
              isNextButtonVisible={isNextButtonVisible}
              isEndTestButtonVisible={isEndTestButtonVisible}
            />
          </>
        )}
      </S.Board>
      <S.EndTestButton
        onClick={onTestEnd}
        secondary
        isEndTestButtonVisible={isEndTestButtonVisible}
      >
        Zakończ test
      </S.EndTestButton>

      <S.ProgressContainer ref={loadingRefContainer}>
        <S.Progress ref={loadingRef} value='0' max='100' />
      </S.ProgressContainer>

      <TestEndContent
        testEndContentRef={testEndContentRef}
        wordsForTestResult={wordsForTestResult}
      />
    </S.TestView>
  );
};

export default RankedTestView;
