import React from "react";
import * as S from "./styles";
import PropTypes from "prop-types";
import Input from "components/0-atoms/Input";
import Spinner from "components/0-atoms/Spinner";
import Button from "components/0-atoms/Button";

const AddOwnWord = ({
  initialInputsData,
  inputValues,
  handleInputChange,
  onSubmit,
  isSpinnerShowed
}) => {
  const inputsToRender = initialInputsData.map(({ placeholder, name }) => (
    <Input
      type='text'
      onChange={handleInputChange}
      key={name}
      placeholder={placeholder}
      name={name}
      value={inputValues[name]}
    />
  ));

  return (
    <S.AddOwnWordForm onSubmit={onSubmit}>
      {inputsToRender}
      <Button primary>Zapisz</Button>
      {isSpinnerShowed && <Spinner />}
    </S.AddOwnWordForm>
  );
};

AddOwnWord.propTypes = {
  initialInputsData: PropTypes.array.isRequired,
  inputValues: PropTypes.object.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  isSpinnerShowed: PropTypes.bool.isRequired
};
export default AddOwnWord;
