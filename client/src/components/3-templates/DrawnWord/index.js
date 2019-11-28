import React, { useRef } from "react";
import * as S from "./styles";
import { TimelineMax } from "gsap";

const DrawnWord = ({
  wordToTranslate,
  lettersToClick,
  userAnswer,
  clickNextButtonHandler,
  onLetterClick,
  isNextButtonVisible,
  isEndTestButtonVisible
}) => {
  const drawWordRef = useRef(null);
  const textToUser = useRef(null);

  const wordToGuess = userAnswer.map(({ letter, isClickable }, index) => {
    return (
      <S.LetterToGuess
        key={index}
        isClickable={isClickable}
        num={index + 1}
        letter={letter}
      >
        <S.Letter letter={letter}>{letter}</S.Letter>
      </S.LetterToGuess>
    );
  });

  const vovel = ["a", "ą", "e", "ę", "i", "o", "u", "y"];

  const lettersPossibleToClick = lettersToClick.map(
    ({ letter, wasClicked, id }, index) => {
      return (
        <S.LetterPossibleToClick
          isVovel={vovel.includes(letter)}
          disabled={wasClicked}
          wasClicked={wasClicked}
          ref={drawWordRef}
          onClick={() => {
            onLetterClick(letter, id);
          }}
          onFocus={e => {
            if (e.keyCode === 13) {
              onLetterClick(letter, id);
            }
          }}
          key={index}
        >
          {letter}
        </S.LetterPossibleToClick>
      );
    }
  );

  const isOneLetterLeftToPick = userAnswer[userAnswer.length - 2].letter;

  const t1 = new TimelineMax();
  if (textToUser.current) {
    if (isOneLetterLeftToPick) {
      t1.to(textToUser.current, 0.5, { y: 10 });
    } else {
      t1.to(textToUser.current, 0.5, { y: 0 });
    }
  }

  const isBoardShade = isNextButtonVisible || isEndTestButtonVisible;

  return (
    <S.SingleBox isBoardShade={isBoardShade}>
      <S.WordToTranslate big bold center>
        {wordToTranslate}
      </S.WordToTranslate>

      <S.LettersToGuessWrapper>{wordToGuess}</S.LettersToGuessWrapper>

      <S.TextToUser ref={textToUser}>
        {isOneLetterLeftToPick
          ? "Pozostała ostatnia litera do wyboru!"
          : "Kliknij na literę, a wskoczy ona w pierwsze wolne miejsce."}
      </S.TextToUser>
      <S.LettersToClickWrapper ref={drawWordRef}>
        {lettersPossibleToClick}
      </S.LettersToClickWrapper>

      <S.NextWordButton
        disabled={!isNextButtonVisible && true}
        secondary
        onClick={clickNextButtonHandler}
        isNextButtonVisible={isNextButtonVisible}
      >
        Dalej
      </S.NextWordButton>
    </S.SingleBox>
  );
};

export default DrawnWord;
