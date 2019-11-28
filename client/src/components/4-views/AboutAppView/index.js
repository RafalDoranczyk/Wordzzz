import React from "react";
import * as S from "./styles";
import UseDroppingWords from "hooks/useDroppingWords";
import Text from "components/0-atoms/Text";
import Caption from "components/1-molecules/Caption";

const AboutAppView = () => (
  <S.AboutAppView>
    <S.AboutApp>
      <Caption>O Aplikacji</Caption>
      <Text justify>
        Aplikacja pozwala na tworzenie własnej bazy słówek, którą możesz w łatwy
        sposób rozbudowywać poprzez dodawanie własnych słów wraz z ich
        tłumaczeniami lub pobrania gotowych, przygotowanych przez innych
        użytkowników. Słówek uczysz się poprzez codzienne wypełnianie testów.
        Test polega na poprawnym przetłumaczeniu wylosowanych słówek. Do wyboru
        są dwa testy - normalny i rankingowy. Test rankingowy zapisuje wyniki.
        Słówko zostaje oznaczone jako poznane, jeżeli użytkownik poprawnie
        przetłumaczył je co najmniej 5 razy.
      </Text>
    </S.AboutApp>
    <S.AboutApp>
      <Caption>Od autora</Caption>
      <Text justify>
        Aplikacja została stworzona w celu praktycznego zastosowania wiedzy z
        języka programowania JavaScript i nie będzie rozbudowywana oraz
        wspierana w przyszłości.
      </Text>
    </S.AboutApp>

    <UseDroppingWords containerWidth='100vw' containerHeight='45vh' />
  </S.AboutAppView>
);

export default AboutAppView;
