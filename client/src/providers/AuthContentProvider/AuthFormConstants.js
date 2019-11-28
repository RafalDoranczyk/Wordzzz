export const TOO_SHORT_PASSWORD = "Hasło powinno mieć przynajmniej 6 znaków";
export const INVALID_EMAIL = "Sprawdź, czy wpisany jest poprawny e-mail";
export const EMPTY_FIELDS = "Wypełnij wszystkie pola";
export const PASSWORDS_NOT_MATCH = "Podane hasła nie są takie same";
export const LOG_IN = "LOG_IN";
export const SIGN_UP = "SIGN_UP";

export const AUTH_INPUT_INITIAL_VALUES = {
  username: "",
  email: "",
  password: "",
  repeatPassword: ""
};

export const AUTH_INPUT_FIELDS_DATA = [
  {
    requiredForLogin: true,
    placeholder: "E-mail",
    type: "email",
    name: "email",
    icon: "at"
  },
  {
    isActive: false,
    placeholder: "Nick",
    type: "text",
    name: "username",
    icon: "user"
  },
  {
    requiredForLogin: true,
    placeholder: "Hasło",
    type: "password",
    name: "password",
    icon: "lock"
  },

  {
    isActive: false,
    placeholder: "Powtórz hasło",
    type: "password",
    name: "repeatPassword",
    icon: "lock"
  }
];
