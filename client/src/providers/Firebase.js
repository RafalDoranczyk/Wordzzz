import app from "firebase/app";
import "firebase/auth";
import "firebase/database";
import wordsStartingPack from "const";
import * as C from "./constants";

const config = {
  apiKey: "AIzaSyClge1b404DYu0tBJQFAQB0oQpKHlivC04",
  authDomain: "english-app-f6b54.firebaseapp.com",
  databaseURL: "https://english-app-f6b54.firebaseio.com",
  projectId: "english-app-f6b54",
  storageBucket: "english-app-f6b54.appspot.com",
  messagingSenderId: "656360265869"
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
    this.db = app.database();
  }

  //  AUTHORIZATION

  login(email, password) {
    return this.auth
      .signInWithEmailAndPassword(email, password)
      .then(() => ({ msg: "Trwa przekierowywanie...", isOK: true }))
      .catch(({ message, code }) => {
        let messageToUser = "";
        if (code === "auth/user-not-found") {
          messageToUser = C.USER_NOT_FOUND;
        } else if (code === "auth/wrong-password") {
          messageToUser = C.WRONG_PASSWORD;
        } else {
          messageToUser = message;
        }
        return {
          msg: messageToUser,
          isOK: false
        };
      });
  }

  register(username, email, password) {
    return this.auth
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        wordsStartingPack.forEach(word =>
          this.db.ref(`users/${this.auth.currentUser.uid}/words`).push(word)
        );
        this.db
          .ref(`users/${this.auth.currentUser.uid}/info`)
          .set({ level: 0 });
        this.auth.currentUser.updateProfile({
          displayName: username
        });
        return { msg: C.SIGN_UP_SUCCESS_MESSAGE, isOK: true };
      })
      .catch(err => ({ msg: err.message, isOK: false }));
  }

  logout() {
    return this.auth.signOut();
  }

  getUserInfo() {
    return this.auth.currentUser && this.auth.currentUser.providerData;
  }

  isInitialized() {
    return new Promise(resolve => {
      this.auth.onAuthStateChanged(resolve);
    });
  }

  getCurrentUsername() {
    return this.auth.currentUser && this.auth.currentUser.displayName;
  }

  change() {
    this.auth()
      .setPersistence(this.auth.Auth.Persistence.SESSION)
      .then(function() {
        // Existing and future Auth states are now persisted in the current
        // session only. Closing the window would clear any existing state even
        // if a user forgets to sign out.
        // ...
        // New sign-in will be persisted with session persistence.
        // return this.auth().signInWithEmailAndPassword(email, password);
      })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
      });
  }

  listen() {
    this.db.ref(`users/${this.auth.currentUser.uid}/info`);
  }

  addWordToFirebase(wordWithTranslations) {
    return this.db
      .ref(`users/${this.auth.currentUser.uid}/words`)
      .push(wordWithTranslations)
      .then(() => "Słówko zostało dodane do bazy!")
      .catch(err => "Wystąpił błąd podczas dodawania słówka");
  }
}

export default new Firebase();
