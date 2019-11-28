import React from "react";
import * as S from "./styles";
import AddOwnWordProvider from "providers/AddOwnWordProvider/AddOwnWordProvider";
import AddOwnWordForm from "components/2-organisms/AddOwnWordForm";

const AddOwnWordSection = ({ wordsAlreadyHad }) => {
  const {
    initialInputsData,
    inputValues,
    handleInputChange,
    onSubmit,
    messageToUser,
    isMessageSuccess,
    isSpinnerShowed
  } = AddOwnWordProvider(wordsAlreadyHad);

  return (
    <S.AddOwnWordSection>
      <S.Message isMessageSuccess={isMessageSuccess}>{messageToUser}</S.Message>
      <S.FormTitle>Wypełnij formularz</S.FormTitle>
      <AddOwnWordForm
        initialInputsData={initialInputsData}
        inputValues={inputValues}
        handleInputChange={handleInputChange}
        onSubmit={onSubmit}
        isSpinnerShowed={isSpinnerShowed}
      />
    </S.AddOwnWordSection>
  );
};

export default AddOwnWordSection;
