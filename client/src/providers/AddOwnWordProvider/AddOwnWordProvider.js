import UseForm from "hooks/useForm";
import firebase from "../Firebase";
import UseSpinner from "hooks/useSpinner";

const AddOwnWordProvider = wordsAlreadyHad => {
  const { handleSpinner, isSpinnerShowed } = UseSpinner();
  const inputInitialValues = {
    wordToTranslate: "",
    translation_0: "",
    translation_1: "",
    translation_2: "",
    translation_3: "",
    translation_4: "",
    translation_5: ""
  };

  const {
    handleInputChange,
    inputValues,
    clearInputs,
    messageToUser,
    setMessageToUser,
    setMessageSuccess,
    isMessageSuccess
  } = UseForm(inputInitialValues);

  const { wordToTranslate, translation_0 } = inputValues;

  const lowerCaseInputValues = {};
  Object.entries(inputValues).map(item => {
    lowerCaseInputValues[item[0]] = item[1].toLowerCase();
  });

  const initialInputsData = [
    {
      name: "wordToTranslate",
      placeholder: "Słówko do nauki"
    },
    {
      name: "translation_0",
      placeholder: "Tłumaczenie 1"
    },
    {
      name: "translation_1",
      placeholder: "Tłumaczenie 2"
    },
    {
      name: "translation_2",
      placeholder: "Tłumaczenie 3"
    },
    {
      name: "translation_3",
      placeholder: "Tłumaczenie 4"
    },
    {
      name: "translation_4",
      placeholder: "Tłumaczenie 5"
    },
    {
      name: "translation_5",
      placeholder: "Tłumaczenie 6"
    }
  ];

  const onSubmit = async e => {
    e.preventDefault();
    if (!wordToTranslate || !translation_0) {
      setMessageSuccess(false);
      return setMessageToUser(
        "Musisz uzupełnic słówko do nauki i przynajmniej pierwsze tłumaczenie!"
      );
    } else if (wordsAlreadyHad.includes(wordToTranslate)) {
      setMessageSuccess(false);
      return setMessageToUser("Takie słówko istnieje już w Twojej bazie");
    }

    handleSpinner();
    await saveWordInMongo();
    const message = await saveWordInFirebase();
    setMessageToUser(message);
    handleSpinner();
    clearInputs(inputInitialValues);
  };

  const saveWordInMongo = async () => {
    try {
      const response = await fetch("/api/addWordWithTranslations", {
        headers: {
          "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({ lowerCaseInputValues })
      });
      const message = await response.json();
      return message;
    } catch (err) {
      console.log(err);
      return "Błąd dodawania do ogólnej bazy";
    }
  };

  const saveWordInFirebase = async () => {
    const now = new Date();
    const d = now.getDate();
    const m = now.getMonth() + 1;
    const y = now.getFullYear();
    const created = `${d}.${m}.${y}`;
    const firebaseObj = {
      ...lowerCaseInputValues,
      allAnswers: 0,
      goodAnswers: 0,
      created,
      lastOccurenceInQuiz: "Brak"
    };

    const message = await firebase.addWordToFirebase(firebaseObj);
    await setMessageSuccess(true);
    return message;
  };

  return {
    initialInputsData,
    inputValues,
    handleInputChange,
    onSubmit,
    messageToUser,
    isSpinnerShowed,
    isMessageSuccess
  };
};

export default AddOwnWordProvider;
