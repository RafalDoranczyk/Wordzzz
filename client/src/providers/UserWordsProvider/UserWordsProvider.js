import { useState, useEffect } from "react";
import firebase from "../Firebase";
import useSpinner from "../../hooks/useSpinner";
const UserWordsProvider = () => {
  const { handleSpinner, isSpinnerShowed } = useSpinner();

  const [allUserWords, setAllUserWords] = useState([]);
  const [filteredWords, setFilterWords] = useState([]);
  const [wordsToRender, setWordsToRender] = useState([]);
  const [renderedWordsLength, setRenderedWordsLength] = useState();

  const [lettersToFilter, setLettersToFilter] = useState([]);
  const [activeLetter, setActiveLetter] = useState("");

  const [pageNumbersToFilter, setPageNumbersToFilter] = useState([]);
  const [activePageNumber, setActivePageNumber] = useState(1);

  const [filterInputValue, setFilterInputValue] = useState("");
  const [isUserDataReady, setUserDataReady] = useState(false);

  const [pickedBoardToEdit, setPickedBoardToEdit] = useState(false);
  const [isSaveButtonVisible, setSaveButtonVisible] = useState(false);

  useEffect(() => {
    if (firebase.auth.currentUser) {
      const data = getAllUserWords();
      data.then(data => {
        setUserDataReady(true);
        const usedLetters = [
          ...new Set(
            data.map(item => item.wordToTranslate.slice(0, 1).toLowerCase())
          )
        ].sort();
        setActiveLetter(usedLetters[0]);
        setLettersToFilter(usedLetters);
      });
    }
  }, []);

  useEffect(() => {
    onLetterChange();
  }, [activeLetter]);

  const getAllUserWords = async () => {
    const eventref = firebase.db.ref(
      `users/${firebase.auth.currentUser.uid}/words`
    );
    const userWords = [];
    await eventref.once("value").then(snap => {
      if (snap) {
        snap.forEach(i => {
          const fireKey = i.key;
          const itemValueWithKey = { ...i.val(), fireKey };
          userWords.push(itemValueWithKey);
        });
      } else return;
    });
    setAllUserWords(userWords);
    return userWords;
  };

  const onLetterChange = () => {
    if (allUserWords.length === 0 || !activeLetter) return;

    const filteredWords = allUserWords
      .filter(
        item =>
          item.wordToTranslate.slice(0, 1).toLowerCase() ===
          activeLetter.toLowerCase()
      )
      .map(obj => ({ ...obj }));
    const x = createAlp(filteredWords);
    setFilterWords(x);
    setWordsToRender(x[0]);
    const wordsLength = x.reduce((acc, cur) => acc + cur.length, 0);
    setRenderedWordsLength(wordsLength);
  };

  const createAlp = arr => {
    const maxItemsInOneArray = 20;
    const pageNumbers = Math.ceil(arr.length / maxItemsInOneArray);
    const pageNumbersArray = [];
    const x = [];
    for (let i = 0; i < pageNumbers; i++) {
      pageNumbersArray.push(i + 1);
      x.push(arr.slice(i * maxItemsInOneArray, maxItemsInOneArray * (i + 1)));
    }
    setActivePageNumber(1);
    setPageNumbersToFilter(pageNumbersArray);
    return x;
  };

  const onLetterClick = letter => {
    setFilterInputValue("");
    const item = lettersToFilter.find(item => item === letter);
    setActiveLetter(item);
  };

  const onPageNumberClick = num => {
    setActivePageNumber(num);

    setWordsToRender(filteredWords[num - 1]);
  };

  const handleInputValueFilter = e => {
    const value = e.target.value;
    setFilterInputValue(value);
    if (!value) {
      setActiveLetter(lettersToFilter[0]);
      return;
    } else if (!lettersToFilter.includes(value.slice(0, 1))) {
      setWordsToRender([]);
      setActiveLetter("");
      setRenderedWordsLength(0);
      setActivePageNumber(null);
      return;
    } else {
      setActiveLetter(value.slice(0, 1));
    }

    const filteredToRender = allUserWords
      .filter(
        item =>
          item.wordToTranslate.slice(0, value.length).toLowerCase() === value
      )
      .map(obj => ({ ...obj }));
    setActivePageNumber(1);
    setRenderedWordsLength(filteredToRender.length);
    const k = createAlp(filteredToRender);
    setFilterWords(k);
    setWordsToRender(filteredToRender.slice(0, 25));
  };

  const editBoardhandler = fireKey => {
    if (!fireKey) {
      const firstRenderedValue = allUserWords.find(
        i => i.fireKey === pickedBoardToEdit
      );
      const updatedValue = wordsToRender.find(
        i => i.fireKey === pickedBoardToEdit
      );

      const wasChangedSaved =
        JSON.stringify(firstRenderedValue) === JSON.stringify(updatedValue);

      if (!wasChangedSaved) {
        const slicedRenderedWords = wordsToRender.slice();
        const x = slicedRenderedWords.findIndex(
          item => item.fireKey === updatedValue.fireKey
        );
        slicedRenderedWords[x] = firstRenderedValue;
        setWordsToRender(slicedRenderedWords);
      }
    }

    setPickedBoardToEdit(fireKey);
  };

  const onTranslationChange = (translationNr, newTranslation) => {
    const id = wordsToRender.findIndex(
      item => item.fireKey === pickedBoardToEdit
    );
    setSaveButtonVisible(true);
    const updatedWords = wordsToRender.slice().map(obj => ({ ...obj }));
    updatedWords[id][translationNr] = newTranslation;

    setWordsToRender(updatedWords);
  };

  const onTranslationSave = fireKey => {
    handleSpinner();
    const currentBoard = wordsToRender.find(item => item.fireKey === fireKey);
    firebase.db
      .ref(`users/${firebase.auth.currentUser.uid}/words/${fireKey}`)
      .set(currentBoard)
      .then(() => {
        const x = allUserWords.findIndex(
          item => item.fireKey === currentBoard.fireKey
        );
        const updated = allUserWords.slice().map(obj => ({ ...obj }));
        updated[x] = currentBoard;
        setAllUserWords(updated);
        setSaveButtonVisible(false);
        handleSpinner();
      })

      .catch(err => console.log(err));
  };

  const onDeleteBoard = fireKey => {
    handleButtonVisible(false);
    handleSpinner();
    firebase.db
      .ref(`users/${firebase.auth.currentUser.uid}/words`)
      .child(fireKey)
      .remove()
      .then(() => {
        const spliced = wordsToRender.filter(item => item.fireKey !== fireKey);
        const all = allUserWords.filter(item => item.fireKey !== fireKey);
        setAllUserWords(all);
        setWordsToRender(spliced);
        const usedLetters = [
          ...new Set(
            all.map(item => item.wordToTranslate.slice(0, 1).toLowerCase())
          )
        ].sort();
        setLettersToFilter(usedLetters);
        const x = createAlp(spliced);
        const wordsLength = x.reduce((acc, cur) => acc + cur.length, 0);
        setRenderedWordsLength(wordsLength);
        handleSpinner();
      });
  };

  const handleButtonVisible = bool => {
    setSaveButtonVisible(bool);
  };

  return {
    lettersToFilter,
    onLetterClick,
    filteredWords,
    filterInputValue,
    handleInputValueFilter,
    activeLetter,
    isUserDataReady,
    isSaveButtonVisible,
    pageNumbersToFilter,
    onPageNumberClick,
    wordsToRender,
    activePageNumber,
    renderedWordsLength,
    editBoardhandler,
    pickedBoardToEdit,
    onTranslationChange,
    onTranslationSave,
    handleButtonVisible,
    isSpinnerShowed,
    onDeleteBoard
  };
};

export default UserWordsProvider;
