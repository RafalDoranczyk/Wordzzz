import React from "react";
import * as S from "./styles";
import PropTypes from "prop-types";
import InputField from "components/1-molecules/InputField";
import Button from "components/0-atoms/Button";
import MessageToUser from "components/0-atoms/MessageToUser";

const AuthForm = ({
  inputValues,
  dataForRenderedInputs,
  handleSubmit,
  messageToUser,
  handleInputChange,
  submitButtonText,
  isMessageSuccess
}) => {
  const inputsToRender = dataForRenderedInputs.map(
    ({ name, type, placeholder, icon, isActive }) => (
      <InputField
        isActive={isActive}
        key={name}
        name={name}
        type={type}
        placeholder={placeholder}
        icon={icon}
        onChange={handleInputChange}
        value={inputValues[name]}
      />
    )
  );

  return (
    <S.AuthForm onSubmit={handleSubmit} noValidate>
      <MessageToUser isMessageSuccess={isMessageSuccess}>
        {messageToUser}
      </MessageToUser>
      {inputsToRender}
      <Button primary>{submitButtonText}</Button>
    </S.AuthForm>
  );
};

AuthForm.propTypes = {
  inputValues: PropTypes.object.isRequired,
  dataForRenderedInputs: PropTypes.array.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  messageToUser: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  submitButtonText: PropTypes.string.isRequired,
  isMessageSuccess: PropTypes.bool.isRequired
};

export default AuthForm;
