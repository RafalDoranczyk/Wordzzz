import React from "react";
import * as S from "./styles";
import PropTypes from "prop-types";
import Caption from "components/1-molecules/Caption";
import TestForm from "components/3-templates/TestForm";
import DrawnWord from "components/3-templates/DrawnWord";
import TestEndContent from "components/3-templates/TestEndContent";
import TestProvider from "providers/TestProvider/TestProvider";
import Text from "components/0-atoms/Text";

const NormalTestView = ({ allUserWordsWithTranslations }) => {
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
    loadingRefContainer
  } = TestProvider(allUserWordsWithTranslations);

  return (
    <S.TestView>
      <Caption captionRef={captionRef}>
        {alldrawnWordsNumber > 0
          ? `Słówko ${getCurrentWordIndex() + 1} / ${alldrawnWordsNumber}`
          : "Zwykły test"}
      </Caption>

      <TestForm
        formBoxRef={formBoxRef}
        onSubmit={onFirstFormSubmit}
        wordsLength={allUserWordsWithTranslations.length}
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
        onClick={onTestEndButtonClick}
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

NormalTestView.propTypes = {
  allUserWordsWithTranslations: PropTypes.array.isRequired
};

export default NormalTestView;
