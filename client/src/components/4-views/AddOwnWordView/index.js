import React from "react";
import * as S from "./styles";
import Text from "components/0-atoms/Text";
import Caption from "components/1-molecules/Caption";
import AddOwnWordSection from "components/3-templates/AddOwnWordSection";
import { useHistory } from "react-router-dom";
import { MONGO_WORDS } from "routes";

const AddOwnWordView = ({ wordsAlreadyHad }) => {
  const history = useHistory();

  return (
    <S.AddOwnWordView>
      <Caption>Dodaj słówko do bazy słówek!</Caption>
      <Text justify>
        Tutaj możesz dodać nowe słówko do Twojej bazy. Wypełnij formularz
        uzupełniając co najmniej jego pierwsze tłumaczenie. Słówko i jego
        tłumaczenia będą również możliwe do pobrania przez innych użytkowników w
        zakładce
        <S.Anchor onClick={() => history.push(MONGO_WORDS)}>
          słówka użytkowników.
        </S.Anchor>
        Postaraj się uzupełnić jak najwięcej pól tłumaczeń, aby inne osoby mogły
        z tego skorzystać. Maksymalnie możesz wpisać 6 tłumaczeń.
      </Text>
      <AddOwnWordSection wordsAlreadyHad={wordsAlreadyHad} />
    </S.AddOwnWordView>
  );
};

export default AddOwnWordView;
