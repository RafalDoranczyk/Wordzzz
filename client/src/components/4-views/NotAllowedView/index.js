import React from "react";
import { Link } from "react-router-dom";
import * as S from "./styles";

const NotAllowedView = () => (
  <S.NotAllowedView>
    <h1>nie jestes zalogowany!</h1>
    <Link to='/'>Przejdź do strony głównej i się zaloguj </Link>
  </S.NotAllowedView>
);

export default NotAllowedView;
