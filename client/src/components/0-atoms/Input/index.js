import React from "react";
import * as S from "./styles";
import PropTypes, { number } from "prop-types";

const Input = ({ onChange, value, type, placeholder, name, disabled }) => (
  <S.Input
    id={name}
    onChange={onChange}
    value={value}
    type={type}
    placeholder={placeholder}
    name={name}
    disabled={disabled}
  />
);

Input.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  type: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  disabled: PropTypes.bool
};

export default Input;
