import { useState, useRef, useEffect } from "react";
import { TimelineMax } from "gsap";

const TestProvider = wordsToCreateTest => {
  const [allDrawnWords, setAllDrawnWords] = useState([]);
  const [wordToTranslate, setWordToTranslate] = useState("");
  const [translationToGuess, setTranslationToGuess] = useState([]);
  const [userAnswer, setUserAnswer] = useState([]);
  const [lettersToClick, setLettersToClick] = useState([]);
  const [isNextButtonVisible, setNextButtonVisible] = useState(false);
  const [isEndTestButtonVisible, setEndTestButtonVisible] = useState(false);
  const [isTestEnd, setTestEnd] = useState(false);
  const [wordsForTestResult, setWordsForTestResult] = useState([]);

  const formBoxRef = useRef(null);
  const wordBoardRef = useRef(null);
  const captionRef = useRef(null);
  const testEndContentRef = useRef(null);
  const loadingRef = useRef(null);
  const loadingRefContainer = useRef(null);
  useEffect(() => {
    if (userAnswer.length > 0) {
      const isUserAnswerFulfilled = userAnswer[userAnswer.length - 1].letter;
      const currentWordIndex = getCurrentWordIndex();
      const isTestOver =
        isUserAnswerFulfilled && currentWordIndex + 1 === allDrawnWords.length;
      if (isUserAnswerFulfilled) {
        checkSingleUserAnswer();
      }
      if (isTestOver) {
        setEndTestButtonVisible(true);
      } else if (!isTestOver && isUserAnswerFulfilled) {
        setNextButtonVisible(true);
      }
    }
  }, [userAnswer]);

  const createNextWord = () => {
    const currentWordIndex = getCurrentWordIndex();
    const nextWordObj = allDrawnWords[currentWordIndex + 1];
    createTranslationToGuess(nextWordObj);
    setWordToTranslate(nextWordObj.wordToTranslate);
    setNextButtonVisible(false);
  };

  const createTranslationToGuess = word => {
    const {
      translation_0,
      translation_1,
      translation_2,
      translation_3,
      translation_4,
      translation_5
    } = word;
    const translations = [
      translation_0,
      translation_1,
      translation_2,
      translation_3,
      translation_4,
      translation_5
    ];

    const translationsToChooseFrom = translations.filter(trans => trans);
    const translationToRender =
      translationsToChooseFrom[
        Math.floor(Math.random() * translationsToChooseFrom.length)
      ];

    setTranslationToGuess(translationToRender);
    createUserAnswer(translationToRender);
    createLettersToClick(translationToRender);
  };

  const createUserAnswer = translationToRender => {
    const userAnswer = [];
    const translationLength = translationToRender.length;
    for (let i = 0; i < translationLength; i++) {
      userAnswer.push({
        letter: ""
      });
    }
    if (translationLength >= 12) {
      userAnswer[0].letter = translationToRender[0];
      userAnswer[4].letter = translationToRender[4];
      userAnswer[10].letter = translationToRender[10];
    }
    if (translationLength >= 8) {
      userAnswer[0].letter = translationToRender[0];
      userAnswer[5].letter = translationToRender[5];
    } else if (translationLength > 5) {
      userAnswer[0].letter = translationToRender[0];
    }
    setUserAnswer(userAnswer);
  };

  const createLettersToClick = translation => {
    const alphabet = "aąbcćdeęfghijklłmnńoópqrsśtźżuvwxyz".split("");
    const requiredWordsToClick = [...translation];

    const howManyLettersToClick = Math.ceil(requiredWordsToClick.length * 1.4);
    const lettersToPushNumber =
      howManyLettersToClick - requiredWordsToClick.length;

    for (let i = 0; i < lettersToPushNumber; i++) {
      const random = Math.floor(Math.random() * alphabet.length);
      requiredWordsToClick.push(alphabet[random]);
    }
    const shuffled = requiredWordsToClick
      .sort(() => 0.5 - Math.random())
      .map((item, index) => ({ id: index, letter: item, wasClicked: false }));
    setLettersToClick(shuffled);
  };

  const onLetterClick = (letter, id) => {
    const firstEmptyWordIndex = userAnswer.findIndex(
      ({ letter }) => letter === ""
    );

    if (firstEmptyWordIndex === -1) {
      return;
    }

    const updatedLettersToClick = [...lettersToClick];
    const clickedLetterId = updatedLettersToClick.findIndex(
      item => item.id === id
    );
    updatedLettersToClick[clickedLetterId].wasClicked = true;
    setLettersToClick(updatedLettersToClick);
    const updatedUserAnswer = [...userAnswer];
    updatedUserAnswer[firstEmptyWordIndex].letter = letter;
    setUserAnswer(updatedUserAnswer);
  };

  const onFirstFormSubmit = wordsNumberToDraw => {
    const shuffled = wordsToCreateTest.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, wordsNumberToDraw);
    selected.map((item, index) => (item.index = index));
    setAllDrawnWords(selected);
    const firstItem = selected[0];
    createTranslationToGuess(firstItem);
    setWordToTranslate(firstItem.wordToTranslate);
    onFirstFormSubmitAnimation();
  };

  const clickNextButtonHandler = () => {
    createNextWord();
  };

  const getCurrentWordIndex = () => {
    const currentWordIndex = allDrawnWords.findIndex(
      item => item.wordToTranslate === wordToTranslate
    );
    return currentWordIndex;
  };

  const onFirstFormSubmitAnimation = () => {
    const t1 = new TimelineMax();
    const form = formBoxRef.current;
    const board = wordBoardRef.current;
    const caption = captionRef.current;
    t1.to(caption, 0, { opacity: 0 });
    t1.to(caption, 0.5, { opacity: 1 });
    t1.to(form, 0.6, {
      y: -40,
      pointerEvents: "none",
      opacity: 0,
      display: "none",
      delay: -0.5
    });
    t1.to(board, 0.7, { y: 25, scale: 1, ease: "bounce" });
  };

  const checkSingleUserAnswer = () => {
    const answerInString = [...userAnswer.map(({ letter }) => letter)].join("");
    const currentWordIndex = getCurrentWordIndex();
    const updatedDrawnWords = [...allDrawnWords];

    updatedDrawnWords[currentWordIndex].wasGuessed =
      answerInString === translationToGuess;
    updatedDrawnWords[currentWordIndex].drawnTranslation = translationToGuess;
    updatedDrawnWords[currentWordIndex].userAnswer = answerInString;
    setAllDrawnWords(updatedDrawnWords);
  };

  const alldrawnWordsNumber = allDrawnWords.length;

  const onTestEndButtonClick = () => {
    const t1 = new TimelineMax();
    t1.to(captionRef.current, 0.5, { opacity: 0 });
    t1.to(wordBoardRef.current, 0.5, { opacity: 0 });
    t1.to(loadingRef.current, 0, { display: "block" });
    t1.to(loadingRef.current, 0.2, { opacity: 1 });
    t1.to(loadingRef.current, 0.8, { value: 100 });
    t1.to(loadingRef.current, 0.5, { opacity: 0, display: "none" });
    t1.to(captionRef.current, 0, { display: "none" });
    t1.to(wordBoardRef.current, 0, { display: "none" });
    t1.to(loadingRefContainer.current, 0, { display: "none" });
    t1.to(testEndContentRef.current, 0, { display: "block" });
    t1.to(testEndContentRef.current, 0.5, { opacity: 1, y: -10 });
    setTestEnd(true);

    const wordsForTestResult = allDrawnWords.map(
      ({ wordToTranslate, drawnTranslation, wasGuessed, userAnswer }) => ({
        wordToTranslate,
        drawnTranslation,
        wasGuessed,
        userAnswer
      })
    );

    setEndTestButtonVisible(false);
    setWordsForTestResult(wordsForTestResult);
  };

  return {
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
    wordsForTestResult,
    testEndContentRef,
    loadingRef,
    loadingRefContainer,
    allDrawnWords
  };
};

export default TestProvider;
