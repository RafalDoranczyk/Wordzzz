import React from "react";
import * as S from "./styles";
import PropTypes from "prop-types";

const Burger = ({ onClick, isMenuShowed }) => {
  const bars = [...Array(3)].map((b, index) => (
    <S.SingleBar key={index} isMenuShowed={isMenuShowed} />
  ));

  return <S.MenuIconButton onClick={onClick}>{bars}</S.MenuIconButton>;
};

Burger.propTypes = {
  onClick: PropTypes.func.isRequired,
  isMenuShowed: PropTypes.bool.isRequired
};

export default Burger;
