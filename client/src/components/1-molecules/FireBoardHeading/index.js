import React from "react";
import PropTypes from "prop-types";
import * as S from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FireBoardHeading = ({ wordToTranslate, onDeleteBoard, isWordKnown }) => (
  <S.FireBoardHeading isWordKnown={isWordKnown}>
    <S.WordToTranslate bold center isWordKnown={isWordKnown}>
      {wordToTranslate}
    </S.WordToTranslate>
    <S.IsWordKnownIcon>
      <FontAwesomeIcon icon='tag' />
    </S.IsWordKnownIcon>

    <S.DeleteButton color='red' onClick={onDeleteBoard}>
      <FontAwesomeIcon icon='window-close' />
    </S.DeleteButton>
  </S.FireBoardHeading>
);

FireBoardHeading.propTypes = {
  wordToTranslate: PropTypes.string.isRequired,
  onDeleteBoard: PropTypes.func.isRequired,
  isWordKnown: PropTypes.bool.isRequired
};

export default FireBoardHeading;
