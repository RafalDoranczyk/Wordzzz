import { useState, useEffect } from "react";

const useAuthForm = (inputInitialValues, callback) => {
  const [inputValues, setInputs] = useState({ ...inputInitialValues });
  const [messageToUser, setMessageToUser] = useState("");
  const [isMessageSuccess, setMessageSuccess] = useState(false);

  const handleInputChange = e => {
    e.persist();
    setMessageToUser("");
    setInputs(values => ({
      ...values,
      [e.target.name]: e.target.value
    }));
  };
  const clearInputs = inputsToClear => {
    setInputs(values => {
      return { ...values, ...inputsToClear };
    });
  };

  return {
    inputValues,
    handleInputChange,
    clearInputs,
    messageToUser,
    setMessageToUser,
    isMessageSuccess,
    setMessageSuccess,
    setInputs
  };
};

export default useAuthForm;
