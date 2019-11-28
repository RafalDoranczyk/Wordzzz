import React, { useState, useEffect } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import * as routes from "routes";
import firebase from "providers/Firebase";
import Spinner from "components/0-atoms/Spinner";
import LoggedUserRouting from "./LoggedUserRouting";
import AuthView from "components/4-views/AuthView";
import NotAllowedView from "components/4-views/NotAllowedView";
import WrongAddressView from "components/4-views/WrongAddressView";
import { useHistory } from "react-router-dom";

const App = () => {
  const history = useHistory();
  const [isFirebaseInitialized, setFirebaseInitialize] = useState(false);
  let isUserLoggedIn = firebase.getUserInfo();

  useEffect(() => {
    firebase.isInitialized().then(val => setFirebaseInitialize(val));
    isUserLoggedIn = firebase.getUserInfo();
  }, [history]);

  return isFirebaseInitialized !== false ? (
    <Switch>
      <Route exact path={routes.LANDING}>
        {isUserLoggedIn ? <Redirect to={routes.DASHBOARD} /> : <AuthView />}
      </Route>
      <Route path={routes.DASHBOARD}>
        {isUserLoggedIn ? (
          <LoggedUserRouting isUserLoggedIn={isUserLoggedIn} />
        ) : (
          <NotAllowedView />
        )}
      </Route>
      <Route component={WrongAddressView} />
    </Switch>
  ) : (
    <Spinner />
  );
};
export default App;
