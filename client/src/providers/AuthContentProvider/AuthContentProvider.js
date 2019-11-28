import { useState } from "react";
import * as C from "./AuthFormConstants";
import useForm from "hooks/useForm";
import useSpinner from "hooks/useSpinner";
import firebase from "providers/Firebase";
import * as routes from "routes";
import { useHistory } from "react-router-dom";

const AuthContentProvider = () => {
  const { isSpinnerShowed, handleSpinner } = useSpinner();
  const [authFormType, setAuthFormType] = useState(C.LOG_IN);
  const history = useHistory();

  const {
    inputValues,
    handleInputChange,
    clearInputs,
    messageToUser,
    setMessageToUser,
    setInputs,
    isMessageSuccess,
    setMessageSuccess
  } = useForm(C.AUTH_INPUT_INITIAL_VALUES);

  const { email, username, password, repeatPassword } = inputValues;

  const handleFormTriggerChange = () => {
    setAuthFormType(authFormType === C.LOG_IN ? C.SIGN_UP : C.LOG_IN);
    setMessageToUser("");
    clearInputs({ email: "", password: "", repeatPassword: "", username: "" });
  };

  const testApplicationButtonHandler = () => {
    setMessageSuccess(true);
    if (authFormType === C.SIGN_UP) {
      setAuthFormType(C.LOG_IN);
    }
    setInputs(values => ({
      ...values,
      email: "test@test.pl",
      password: "test12"
    }));
    setMessageToUser("Teraz możesz się zalogować!");
  };

  const validateEmail = () => {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const validate = () => {
    let message = "";
    let isValid = false;
    if (!email || !password) {
      message = C.EMPTY_FIELDS;
    } else if (!validateEmail()) {
      message = C.INVALID_EMAIL;
    } else if (password.length < 6) {
      message = C.TOO_SHORT_PASSWORD;
    } else if (authFormType === C.SIGN_UP && password !== repeatPassword) {
      message = C.PASSWORDS_NOT_MATCH;
    } else {
      isValid = true;
    }
    setMessageSuccess(false);
    setMessageToUser(message);
    return isValid;
  };

  const login = () =>
    firebase.login(email, password).then(({ msg, isOK }) => {
      if (isOK) {
        handleSpinner();
        history.push(routes.DASHBOARD);
      } else {
        handleSpinner();
        setMessageSuccess(isOK);
        setMessageToUser(msg);
      }
    });

  const register = () =>
    firebase.register(username, email, password).then(({ msg, isOK }) => {
      if (isOK) {
        clearInputs({ repeatPassword: "", username: "" });
        setAuthFormType(C.LOG_IN);
      }
      handleSpinner();
      setMessageSuccess(isOK);
      setMessageToUser(msg);
    });

  const handleSubmit = e => {
    e.preventDefault();

    if (!validate()) {
      return;
    }
    handleSpinner();
    authFormType === C.LOG_IN ? login() : register();
  };

  let dataForRenderedInputs, submitButtonText, buttonText;

  if (authFormType === C.SIGN_UP) {
    dataForRenderedInputs = C.AUTH_INPUT_FIELDS_DATA;
    submitButtonText = "Zarejestruj";
    buttonText = "Posiadasz już konto? Zaloguj się!";
  } else if (authFormType === C.LOG_IN) {
    dataForRenderedInputs = C.AUTH_INPUT_FIELDS_DATA.filter(
      item => item.requiredForLogin
    );
    submitButtonText = "Zaloguj";
    buttonText = "Nie masz konta? Zarejestruj się!";
  }

  return {
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
  };
};

export default AuthContentProvider;
