import { useHistory } from "react-router-dom";
import * as routes from "routes";
import firebase from "../Firebase";
import UseSpinner from "hooks/useSpinner";
import { useState } from "react";

const navigationData = [
  {
    text: "Profil",
    icon: "user",
    linkTo: routes.DASHBOARD
  },
  {
    text: "Testy",
    icon: "graduation-cap",
    linkTo: routes.LEARN
  },
  {
    text: "Moje postępy",
    icon: "chart-line",
    linkTo: routes.USER_WORDS
  },
  {
    text: "Dodaj własne słówko",
    icon: "user-plus",
    linkTo: routes.ADD_OWN_WORD
  },
  {
    text: "Słówka użytkowników",
    icon: "database",
    linkTo: routes.MONGO_WORDS
  },
  {
    text: "Wyloguj",
    icon: "sign-out-alt",
    linkTo: routes.LANDING
  }
];

const NagidationProvider = ({ render }) => {
  const history = useHistory();
  const { handleSpinner, isSpinnerShowed } = UseSpinner();
  const [isMenuShowed, setMenuShowed] = useState(false);

  const onListElementClick = linkTo => {
    setMenuShowed(false);
    if (linkTo === routes.LANDING) {
      onLogoutIconClick();
    } else {
      history.push(linkTo);
    }
  };

  const onLogoutIconClick = async () => {
    handleSpinner();
    await firebase.logout();
    handleSpinner();
    history.push(routes.LANDING);
  };

  navigationData.forEach(item => {
    item.onClick = () => onListElementClick(item.linkTo);
  });
  const isLogoutInProgress = isSpinnerShowed;

  const renderProps = {
    navigationData,
    onLogoutIconClick,
    isLogoutInProgress,
    isMenuShowed,
    setMenuShowed
  };
  return render(renderProps);
};

export default NagidationProvider;
