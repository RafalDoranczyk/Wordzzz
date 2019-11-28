import React, { useRef, useEffect, useState } from "react";
import * as S from "./styles";
import { TimelineMax } from "gsap";
import AuthContentProvider from "providers/AuthContentProvider/AuthContentProvider";
import Spinner from "components/0-atoms/Spinner";
import Button from "components/0-atoms/Button";
import AuthForm from "components/2-organisms/AuthForm";

export const SLOGANS = [
  {
    id: 0,
    author: "Gandhi",
    motto:
      "Żyj tak, jakbyś miał umrzeć jutro. Ucz się tak, jakbyś miał żyć wiecznie."
  },
  {
    id: 1,
    author: "Konfucjusz",
    motto:
      "Ucz się tak, jakbyś niczego jeszcze nie osiągnął, i lękaj się, byś nie stracił tego, co już osiągnąłeś."
  },
  {
    id: 2,
    author: "Albert Einstein",
    motto: `Wszyscy wiedzą, że czegoś nie da się zrobić i przychodzi taki jeden, który nie wie, że się nie da i to robi`
  },
  {
    id: 3,
    author: "Eminem",
    motto:
      "Każdy ma cele i aspiracje i każdy był w takim punkcie swojego życia, w którym nikt w niego nie wierzył."
  }
];

const AuthContent = () => {
  let mottoRef = useRef(null);
  let authorRef = useRef(null);
  let leftSpan = useRef(null);
  let rightSpan = useRef(null);
  const [currentSlogan, setCurrentSlogan] = useState(SLOGANS[0]);
  const t1 = new TimelineMax({ repeat: -1, yoyo: true });
  useEffect(() => {
    let i = 0;
    const m = mottoRef.current;
    const a = authorRef.current;
    const left = leftSpan.current;
    const right = rightSpan.current;
    t1.to(left, 0.5, {
      x: -100,
      scaleX: 12,
      opacity: 0,
      delay: 6
    });
    t1.to(right, 0.5, {
      x: 100,
      scaleX: 12,
      opacity: 0,
      delay: -0.5
    });
    t1.to(m, { y: 20, opacity: 0 });
    t1.to(a, 1, {
      onComplete: () => {
        if (i === 2) {
          i = 0;
        } else {
          i++;
        }
        setCurrentSlogan(SLOGANS[i]);
      },
      y: 10,
      opacity: 0,
      delay: -0.9
    });
    return () => {
      t1.pause();
    };
  }, []);

  const {
    inputValues,
    dataForRenderedInputs,
    submitButtonText,
    handleInputChange,
    handleSubmit,
    messageToUser,
    buttonText,
    handleFormTriggerChange,
    isSpinnerShowed,
    testApplicationButtonHandler,
    isMessageSuccess
  } = AuthContentProvider();

  return (
    <S.AuthContent>
      <S.MottoBox>
        <S.MottoHeading>Inspirujące cytaty</S.MottoHeading>
        <S.Motto ref={mottoRef}>{currentSlogan && currentSlogan.motto}</S.Motto>
        <S.Author ref={authorRef}>
          {currentSlogan && currentSlogan.author}
          <S.SpanLine ref={leftSpan} left />
          <S.SpanLine ref={rightSpan} right />
        </S.Author>
      </S.MottoBox>

      {isSpinnerShowed && <Spinner />}

      <AuthForm
        messageToUser={messageToUser}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        inputValues={inputValues}
        dataForRenderedInputs={dataForRenderedInputs}
        submitButtonText={submitButtonText}
        isMessageSuccess={isMessageSuccess}
      />
      <S.AuthButtonsSection>
        <Button textButton onClick={handleFormTriggerChange}>
          {buttonText}
        </Button>
        <Button textButton onClick={testApplicationButtonHandler}>
          Przetestuj aplikację!
        </Button>
      </S.AuthButtonsSection>
    </S.AuthContent>
  );
};

export default AuthContent;
