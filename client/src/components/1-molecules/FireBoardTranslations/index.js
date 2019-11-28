import React from "react";
import * as S from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IconButton from "components/0-atoms/IconButton";
import PropTypes from "prop-types";

const FireBoardTranslations = ({ translations, onTranslationChange }) => {
  const translationsToRender = translations.map((translation, index) => (
    <S.TranslationItem key={index}>
      <S.TranslationInput
        placeholder={!translation ? "Uzupełnij" : ""}
        onChange={e =>
          onTranslationChange(`translation_${index}`, e.target.value)
        }
        value={translation}
      />
      {translation && (
        <IconButton
          color='red'
          onClick={() => onTranslationChange(`translation_${index}`, "")}
        >
          <FontAwesomeIcon icon='minus' />
        </IconButton>
      )}
    </S.TranslationItem>
  ));

  return (
    <S.FireBoardTranslations>{translationsToRender}</S.FireBoardTranslations>
  );
};

FireBoardTranslations.propTypes = {
  translations: PropTypes.array,
  onTranslationChange: PropTypes.func.isRequired
};

export default FireBoardTranslations;
