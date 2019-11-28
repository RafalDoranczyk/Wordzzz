import { createGlobalStyle, css } from "styled-components";
//font-family: 'Open Sans', sans-serif;
// font-family: 'Roboto', sans-serif;

export const GlobalStyle = createGlobalStyle(
  ({ theme }) => css`
    /* SIMPLE RESET */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    * ::after,
    * ::before {
      content: "";
      position: absolute;
    }
    body {
      background-color: ${({ theme }) => theme.colors.darkWhite};
    }
    /* MUST-HAVE STYLE OF APPROPRIATE ELEMENT */
    button {
      background-color: transparent;
      border: none;
      cursor: pointer;
    }
    input {
      border: none;
      background-image: none;
      background-color: transparent;
      box-shadow: none;
    }

    :root {
      font-size: 10px;
      font-family: "Roboto", sans-serif;
      color: ${({ theme }) => theme.colors.black};

      @media (${theme.queries.smartphone_landscape}) {
        font-size: 12px;
      }
    }
  `
);
