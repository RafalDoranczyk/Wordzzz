import React from "react";
import * as serviceWorker from "./serviceWorker";
import ReactDOM from "react-dom";
import App from "./containers/App";
import { BrowserRouter as Router } from "react-router-dom";
import "./library";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "theme";
import { PixiPlugin } from "gsap/PixiPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { gsap } from "gsap";

gsap.registerPlugin(PixiPlugin, MotionPathPlugin);

ReactDOM.render(
  <Router>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
