import React, { useState } from "react";
import * as S from "./styles";
import PropTypes from "prop-types";
import useForm from "hooks/useForm";

import MessageToUser from "components/0-atoms/MessageToUser";
import Input from "components/0-atoms/Input";

const TestForm = ({ wordsLength, onSubmit, formBoxRef }) => {
  const [isButtonVisible, setButtonVisible] = useState(false);
  const inputStartValue = { numberToDraw: "" };

  const {
    inputValues,
    handleInputChange,
    messageToUser,
    setMessageToUser,
    isMessageSuccess,
    setMessageSuccess
  } = useForm(inputStartValue);

  const onInputChange = e => {
    setButtonVisible(false);
    const value = parseInt(e.target.value);
    if (value === 0) {
      setMessageToUser("Wpisz poprawną liczbę");
      return;
    }
    handleInputChange(e);
    if (value < 0 || isNaN(value)) {
      setMessageSuccess(false);
      setMessageToUser("Wpisz poprawną liczbę");
    } else if (value > wordsLength) {
      setMessageSuccess(false);
      setMessageToUser("Nie ma tylu słówek w bazie");
    } else {
      setButtonVisible(true);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(inputValues.numberToDraw);
  };

  return (
    <S.Box ref={formBoxRef}>
      <MessageToUser isMessageSuccess={isMessageSuccess}>
        {messageToUser}
      </MessageToUser>
      <S.TestForm onSubmit={handleSubmit}>
        <S.Label>
          Słówek możliwych do wylosowania
          <Input
            name=''
            disabled
            type='number'
            placeholder=''
            value={wordsLength || 0}
          />
        </S.Label>
        <S.Label htmlFor='numberToDraw'>
          Ile słówek chcesz wylosować?
          <Input
            placeholder=''
            value={inputValues.numberToDraw}
            onChange={e => onInputChange(e, e.target.name)}
            name='numberToDraw'
            id='numberToDraw'
            type='number'
          />
        </S.Label>
        <S.Btn
          primary
          isButtonVisible={isButtonVisible}
          disabled={isButtonVisible ? false : true}
        >
          Rozpocznij
        </S.Btn>
      </S.TestForm>
    </S.Box>
  );
};

TestForm.propTypes = {
  wordsForTest: PropTypes.arrayOf(PropTypes.object),
  onSubmit: PropTypes.func.isRequired,
  formBoxRef: PropTypes.object.isRequired
};

export default TestForm;
