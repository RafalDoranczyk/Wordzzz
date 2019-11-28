import React from "react";
import * as S from "./styles";
import PropTypes from "prop-types";

const Button = ({
  children,
  onClick,
  primary,
  secondary,
  textButton,
  small,
  medium
}) => (
  <S.Button
    onClick={onClick}
    primary={primary}
    secondary={secondary}
    textButton={textButton}
    small={small}
    medium={medium}
  >
    {children}
  </S.Button>
);

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onClick: PropTypes.func,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  textButton: PropTypes.bool,
  small: PropTypes.bool,
  medium: PropTypes.bool
};

export default Button;
