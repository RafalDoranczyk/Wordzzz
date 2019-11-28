import React from "react";
import PropTypes from "prop-types";
import * as S from "./styles";
import MongoWordCard from "components/2-organisms/MongoWordCard";

const MongoWordsTemplate = ({ mongoWords, addWordToUserBase }) => {
  const wordsToRender = mongoWords.map(
    ({
      wordToTranslate,
      _id,
      translation_0,
      translation_1,
      translation_2,
      translation_3,
      translation_4,
      translation_5
    }) => {
      const translations = [
        translation_0,
        translation_1,
        translation_2,
        translation_3,
        translation_4,
        translation_5
      ];
      return (
        <MongoWordCard
          key={_id}
          translations={translations}
          wordToTranslate={wordToTranslate}
          addWordToUserBase={() =>
            addWordToUserBase(wordToTranslate, translations)
          }
        />
      );
    }
  );

  return <S.AllWords>{wordsToRender}</S.AllWords>;
};

MongoWordsTemplate.propTypes = {
  mongoWords: PropTypes.array.isRequired,
  addWordToUserBase: PropTypes.func.isRequired
};

export default MongoWordsTemplate;
