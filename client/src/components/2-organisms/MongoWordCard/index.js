import React from "react";
import * as S from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MongoWordCard = ({
  translations,
  wordToTranslate,
  addWordToUserBase
}) => {
  return (
    <S.MongoWordCard>
      <S.CardHeading>{wordToTranslate}</S.CardHeading>
      <S.MongoTranslations>
        {translations.map(
          (item, index) =>
            item.length > 0 && (
              <S.SingleTranslation key={index}>{item}</S.SingleTranslation>
            )
        )}
      </S.MongoTranslations>
      <S.AddMongoWordButton onClick={addWordToUserBase}>
        <FontAwesomeIcon icon='plus' />
      </S.AddMongoWordButton>
    </S.MongoWordCard>
  );
};

export default MongoWordCard;
