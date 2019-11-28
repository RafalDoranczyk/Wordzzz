import useForm from "hooks/useForm";
import firebase from "providers/Firebase";
import useSpinner from "hooks/useSpinner";
import { useHistory } from "react-router-dom";
import { useState } from "react";

const UserPopupProvider = () => {
  const initialValues = {
    newPassword: "",
    repeatPassword: ""
  };

  const email = firebase.auth.currentUser && firebase.getUserInfo()[0].email;
  const { isSpinnerShowed, handleSpinner } = useSpinner();
  const history = useHistory();
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [popupType, setPopupType] = useState("");

  const handlePopup = (bool, type) => {
    setPopupType(type);
    setPopupVisible(bool);
    setMessageToUser("");
  };

  const {
    inputValues,
    handleInputChange,
    isMessageSuccess,
    setMessageSuccess,
    messageToUser,
    setMessageToUser
  } = useForm(initialValues);

  const { newPassword, repeatPassword } = inputValues;

  const deleteAccount = e => {
    e.preventDefault();
    if (email !== "test@test.pl") {
      handleSpinner();
      firebase.auth.currentUser
        .delete()
        .then(() => {
          setTimeout(() => {
            history.push("/");
          }, 2000);
        })
        .catch(err => console.log(err));
    } else {
      setMessageSuccess(false);
      setMessageToUser("Niemożliwe dla konta testowego");
    }
  };

  const changePassword = e => {
    e.preventDefault();
    if (email !== "test@test.pl") {
      if (!newPassword || !repeatPassword) {
        setMessageSuccess(false);
        setMessageToUser("Wypełnij wszystkie pola");
      } else if (newPassword !== repeatPassword) {
        setMessageSuccess(false);
        setMessageToUser("Hasła nie zgadzają się");
      } else if (newPassword.length < 6) {
        setMessageSuccess(false);
        setMessageToUser("Hasło musi mieć więcej niż 6 znaków");
      } else {
        handleSpinner();
        firebase.auth.currentUser
          .updatePassword("nowiutkie")
          .then(() => {
            handleSpinner();
          })
          .catch(err => console.log(err));
      }
    } else {
      setMessageSuccess(false);
      setMessageToUser("Niemożliwe dla konta testowego");
    }
  };

  return {
    isSpinnerShowed,
    messageToUser,
    isMessageSuccess,
    deleteAccount,
    handleInputChange,
    inputValues,
    changePassword,
    isPopupVisible,
    setPopupVisible,
    handlePopup,
    popupType
  };
};

export default UserPopupProvider;
