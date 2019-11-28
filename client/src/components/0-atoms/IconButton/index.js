import React from "react";
import * as S from "./styles";
import PropTypes from "prop-types";

const IconButton = ({ children, onClick, color }) => {
  return (
    <S.IconButton color={color} onClick={onClick}>
      {children}
    </S.IconButton>
  );
};

IconButton.propTypes = {
  children: PropTypes.element.isRequired,
  onClick: PropTypes.func.isRequired,
  color: PropTypes.string
};

export default IconButton;
