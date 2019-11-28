import { useEffect, useState } from "react";
import useSpinner from "hooks/useSpinner";
import firebase from "providers/Firebase";

const MongoWordsProvider = wordsAlreadyHad => {
  const [mongoWords, setMongoWords] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [filteredWords, setFilteredWords] = useState([]);
  const [messageToUser, setMessageToUser] = useState("");
  const { isSpinnerShowed, handleSpinner } = useSpinner();

  useEffect(() => {
    fetchMongoWords();
    return () => {
      console.log("unmount");
    };
  }, [wordsAlreadyHad]);

  const filterForWords = e => {
    const value = e.target.value.toLowerCase();
    setInputValue(e.target.value);
    const filtered = mongoWords.filter(item => {
      const slicedWord = item.wordToTranslate.slice(0, value.length);
      return slicedWord === value && item;
    });
    if (filtered.length === 0) {
      setMessageToUser("Brak słówek do wyświetlenia");
    } else if (filtered.length !== mongoWords.length) {
      setMessageToUser(`Liczba znalezionych słówek: ${filtered.length}`);
    } else {
      setMessageToUser(`Liczba znalezionych słówek: ${filtered.length}`);
    }
    setFilteredWords(filtered);
  };

  const fetchMongoWords = async () => {
    handleSpinner();
    try {
      const response = await fetch("/api/fetchMongoWords", {
        method: "post",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ wordsAlreadyHad })
      });
      const data = await response.json();
      setMongoWords(data);
      setFilteredWords(data);
      handleSpinner();
    } catch (err) {
      handleSpinner();
      setMessageToUser("Błąd pobierania...");
      return;
    }
  };

  const addWordToUserBase = async (wordToTranslate, translations) => {
    handleSpinner();
    const now = new Date();
    const created = `${now.getDate()}.
        ${now.getMonth() + 1}.
        ${now.getFullYear()}`;

    const firebaseObj = {
      wordToTranslate,
      allAnswers: 0,
      goodAnswers: 0,
      created,
      lastOccurenceInQuiz: "Brak"
    };

    translations.map((t, index) => {
      firebaseObj[`translation_${index}`] = t;
    });
    const message = await firebase.addWordToFirebase(firebaseObj);

    handleSpinner();
    setMessageToUser(message);
  };

  return {
    inputValue,
    filterForWords,
    messageToUser,
    filteredWords,
    isSpinnerShowed,
    addWordToUserBase
  };
};

export default MongoWordsProvider;
