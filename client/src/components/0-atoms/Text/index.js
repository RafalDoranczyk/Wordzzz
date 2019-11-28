import React from "react";
import * as S from "./styles";
import PropTypes from "prop-types";

const Text = ({
  children,
  bold,
  small,
  big,
  color,
  justify,
  center,
  uppercase,
  last_center
}) => (
  <S.Text
    bold={bold}
    small={small}
    big={big}
    color={color}
    center={center}
    justify={justify}
    uppercase={uppercase}
    last_center={last_center}
  >
    {children}
  </S.Text>
);

Text.propTypes = {
  children: PropTypes.any,
  bold: PropTypes.bool,
  small: PropTypes.bool,
  big: PropTypes.bool,
  color: PropTypes.string,
  center: PropTypes.bool,
  justify: PropTypes.bool,
  uppercase: PropTypes.bool
};

export default Text;
