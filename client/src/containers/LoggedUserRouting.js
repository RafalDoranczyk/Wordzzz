import React, { useState, useEffect } from "react";
import * as S from "./styles";
import * as routes from "routes";
import PropTypes from "prop-types";
import { Route, Switch } from "react-router-dom";
import firebase from "providers/Firebase";
import NavigationProvider from "providers/NavigationProvider/NavigationProvider";
import Spinner from "components/0-atoms/Spinner";
import Navigation from "components/3-templates/Navigation";
import UserProfileView from "components/4-views/UserProfileView";
import AddOwnWordView from "components/4-views/AddOwnWordView";
import TestsView from "components/4-views/TestsView";
import UserWordsView from "components/4-views/UserWordsView";
import MongoWordsView from "components/4-views/MongoWordsView";
import WrongAddressView from "components/4-views/WrongAddressView";
import AboutAppView from "components/4-views/AboutAppView";
import NormalTestView from "components/4-views/NormalTestView";
import RankedTestView from "components/4-views/RankedTestView";

const LoggedUserRouting = ({ isUserLoggedIn }) => {
  const [isLogoutInProgress, setLogoutInProgress] = useState(false);
  const [wordsAlreadyHad, setWordsAlreadyHad] = useState([]);
  const [knownWordsNumber, setKnownWordsNumber] = useState(0);
  const { email, displayName } = isUserLoggedIn[0];
  const [allUserWords, setAllUserWords] = useState([]);
  const [wordsForRankedQuiz, setWordsForRankedQuiz] = useState([]);

  useEffect(() => {
    firebase.db
      .ref(`users/${firebase.auth.currentUser.uid}/words`)
      .on("value", snap => {
        if (snap.val()) {
          const values = [];
          snap.forEach(i => {
            values.push({ fireKey: i.key, ...i.val() });
          });
          const requiredTimeToPass = 1000 * 60 * 60 * 24;
          const currentTime = new Date().getTime();
          const wordsForQuiz = values.filter(item => {
            const isTimePassed =
              currentTime - item.lastOccurenceInQuiz > requiredTimeToPass;
            if (isTimePassed || item.lastOccurenceInQuiz === "Brak") {
              return item;
            }
          });
          setWordsForRankedQuiz(wordsForQuiz);
        } else return;
      });

    return () => setWordsForRankedQuiz([]);
  }, []);

  useEffect(() => {
    getAlreadyHad();
  }, []);

  const allUserWordsWithTranslations = allUserWords.filter(word => {
    if (
      word.translation_0 ||
      word.translation_1 ||
      word.translation_2 ||
      word.translation_3 ||
      word.translation_4 ||
      word.translation_5
    ) {
      return word;
    }
  });

  allUserWordsWithTranslations.forEach(item => {
    delete item.allAnswers;
    delete item.created;
    delete item.goodAnswers;
    delete item.lastOccurenceInQuiz;
  });

  const getAlreadyHad = () => {
    firebase.db
      .ref(`users/${firebase.auth.currentUser.uid}/words`)
      .on("value", snap => {
        if (snap.val()) {
          const values = Object.values(snap.val());
          setAllUserWords(values);
          const data = values.map(item => item.wordToTranslate);
          const knownWords = values.filter(word => word.goodAnswers >= 1)
            .length;
          setKnownWordsNumber(knownWords);
          setWordsAlreadyHad(data);
        } else return;
      });
  };

  return (
    <S.UserPageContainer>
      <NavigationProvider
        render={({
          navigationData,
          onLogoutIconClick,
          isMenuShowed,
          setMenuShowed,
          isLogoutInProgress
        }) => {
          setLogoutInProgress(isLogoutInProgress);
          return (
            <Navigation
              navigationData={navigationData}
              onLogoutIconClick={onLogoutIconClick}
              isMenuShowed={isMenuShowed}
              setMenuShowed={setMenuShowed}
              wordsForRankedQuizNumber={wordsForRankedQuiz.length}
            />
          );
        }}
      />
      <S.UserInnerContainer>
        <Switch>
          {isLogoutInProgress && <Spinner />}
          <Route
            exact
            path={routes.DASHBOARD}
            render={() => (
              <UserProfileView
                allWordsNumber={allUserWords.length}
                knownWordsNumber={knownWordsNumber}
                email={email}
                displayName={displayName}
              />
            )}
          />
          <Route exact path={routes.LEARN} component={TestsView} />
          <Route
            exact
            path={routes.TEST_NORMAL}
            render={() => (
              <NormalTestView
                allUserWordsWithTranslations={allUserWordsWithTranslations}
              />
            )}
          />
          <Route
            exact
            path={routes.TEST_RANKED}
            render={() => (
              <RankedTestView wordsForRankedQuiz={wordsForRankedQuiz} />
            )}
          />
          <Route
            exact
            path={routes.ADD_OWN_WORD}
            render={() => <AddOwnWordView wordsAlreadyHad={wordsAlreadyHad} />}
          />
          <Route
            exact
            path={routes.MONGO_WORDS}
            render={() => <MongoWordsView wordsAlreadyHad={wordsAlreadyHad} />}
          />
          <Route
            exact
            path={routes.USER_WORDS}
            render={() => <UserWordsView />}
          />
          <Route exact path={routes.ABOUT_APP} component={AboutAppView} />
          <Route component={WrongAddressView} />
        </Switch>
      </S.UserInnerContainer>
    </S.UserPageContainer>
  );
};

LoggedUserRouting.propTypes = {
  isUserLoggedIn: PropTypes.array.isRequired
};

export default LoggedUserRouting;
