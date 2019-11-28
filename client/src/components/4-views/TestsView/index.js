import React, { useRef } from "react";
import * as S from "./styles";
import { useHistory } from "react-router-dom";
import Caption from "components/1-molecules/Caption";
import Text from "components/0-atoms/Text";
import Span from "components/0-atoms/Span";
import * as routes from "routes";
import { TweenMax } from "gsap";

const TestsView = () => {
  const normalTestRef = useRef(null);
  const rankedTestRef = useRef(null);
  const contentRef = useRef(null);

  const history = useHistory();

  const onButtonClick = (btnRef, link) => {
    TweenMax.to(btnRef, 0.15, { y: 10, yoyo: true, repeat: 1 });
    TweenMax.to(contentRef.current, 0.5, {
      delay: 0.15,
      opacity: 0
    });
    setTimeout(() => {
      history.push(link);
    }, 600);
  };

  return (
    <S.TestsView ref={contentRef}>
      <S.NormalTest>
        <Caption>Zwykły test</Caption>
        <Text>
          Rozpocznij test, który
          <Span bold> nie będzie zapisywał wyników do Twoich postępów. </Span>
          Test losuje podaną przez Ciebie ilość słówek z całej Twojej bazy, bez
          względu na to, czy słówko jest już prez Ciebie opanowane, czy nie.
          Nadaje się do powtórek i nauki.
        </Text>
        <S.Anchor
          ref={normalTestRef}
          onClick={() =>
            onButtonClick(normalTestRef.current, routes.TEST_NORMAL)
          }
        >
          Przejdź
        </S.Anchor>
      </S.NormalTest>

      <S.RankedTest>
        <Caption>Test rankingowy</Caption>
        <Text>
          Rozpocznij test, który
          <Span bold> zapisze wyniki do Twojch postępów</Span>. Test losuje
          podaną przez Ciebie ilość słówek, które nie zostały przez Ciebie
          opanowane. Każde słówko może zostać wylosowane raz na 24 godziny.
        </Text>
        <S.Anchor
          ref={rankedTestRef}
          onClick={() =>
            onButtonClick(rankedTestRef.current, routes.TEST_RANKED)
          }
        >
          Przejdź
        </S.Anchor>
      </S.RankedTest>
    </S.TestsView>
  );
};

export default TestsView;
