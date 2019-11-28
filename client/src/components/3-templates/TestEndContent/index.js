import React, { useEffect, useRef } from "react";
import * as S from "./styles";
import { TimelineMax } from "gsap";
import Caption from "components/1-molecules/Caption";
import Text from "components/0-atoms/Text";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as routes from "routes";

import { useHistory } from "react-router-dom";

const TestEndContent = ({ wordsForTestResult, testEndContentRef }) => {
  const history = useHistory();
  const captionRef = useRef(null);
  const textRef = useRef(null);
  const allAnswersNumber = wordsForTestResult.length;

  const goodAnswersNumber = wordsForTestResult.filter(
    ({ wasGuessed }) => wasGuessed
  ).length;

  const resultsToRender = wordsForTestResult.map(
    ({ wordToTranslate, drawnTranslation, wasGuessed, userAnswer }, index) => (
      <S.SingleAnswerBox wasGuessed={wasGuessed} key={index}>
        <Text uppercase bold center color='white'>
          {wordToTranslate}
        </Text>
        <S.Text color='darkWhite'>
          Tłumaczenie <S.Span green>{drawnTranslation}</S.Span>
        </S.Text>
        <S.Text color='darkWhite'>
          Twoja odpowiedź <S.Span wasGuessed={wasGuessed}>{userAnswer}</S.Span>
        </S.Text>
        <S.IconContainer wasGuessed={wasGuessed}>
          <FontAwesomeIcon
            icon={wasGuessed ? "check-circle" : "exclamation-circle"}
          />
        </S.IconContainer>
      </S.SingleAnswerBox>
    )
  );

  const textToShow = () => {
    const zeroGoodAnswers =
      "Nie odpowiedziałeś na żadne z wylosowanych słówek... Widzisz je pierwszy raz?";
    const badAnswer = "Słabo to wygląda. ";
    const mediumAnswer =
      "Nie jest najgorzej, ale zawsze mogło być lepiej. Koniecznie przyjrzyj się tym słówkom, na które nie udało Ci się odpowiedzieć.";
    const goodAnswer =
      "Bardzo dobry wynik! Większość z wylosowanych słówek już znasz. Dobra robota.";
    const excellentAnswer =
      "Brawo! Wszystkie Twoje odpowiedzi są poprawne. Tak trzymać!";
    const goodPercentAnswers = goodAnswersNumber / allAnswersNumber;
    switch (goodPercentAnswers) {
      case 1:
        return excellentAnswer;
      case 0.8:
        return goodAnswer;
      case 0.5:
        return mediumAnswer;
      case 0.3:
        return badAnswer;
      case 0:
        return zeroGoodAnswers;
      default:
        return mediumAnswer;
    }
  };

  return (
    <S.Wrapper ref={testEndContentRef}>
      <Caption captionRef={captionRef}>Wyniki testu</Caption>
      <S.TextBox>
        <S.GoodAnswersText big bold center>
          Poprawne odpowiedzi: {goodAnswersNumber} / {allAnswersNumber}
        </S.GoodAnswersText>

        <Text center color='navyBlue'>
          {textToShow()}
        </Text>
      </S.TextBox>
      <S.ResultsBox>{resultsToRender}</S.ResultsBox>

      <S.Anchor onClick={() => history.push(routes.LEARN)}>
        Powrót do testów
      </S.Anchor>
    </S.Wrapper>
  );
};

export default TestEndContent;
