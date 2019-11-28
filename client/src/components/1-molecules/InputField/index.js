import React from "react";
import PropTypes from "prop-types";
import * as S from "./styles";
import Input from "components/0-atoms/Input";
import IconLabel from "components/0-atoms/IconLabel";

const InputField = ({ name, type, placeholder, icon, onChange, value }) => {
  return (
    <S.InputField>
      <IconLabel name={name} icon={icon} />
      <Input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </S.InputField>
  );
};

InputField.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};
export default InputField;
