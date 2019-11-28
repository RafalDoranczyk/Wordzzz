import React from "react";
import * as S from "./styles";

const Spinner = ({ fixed }) => (
  <S.Wrap>
    <S.Spinner fixed={fixed}></S.Spinner>;
  </S.Wrap>
);

export default Spinner;
