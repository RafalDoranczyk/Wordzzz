import React from "react";
import * as S from "./styles";
import PropTypes from "prop-types";
import Span from "components/0-atoms/Span";

const FireBoardResults = ({
  allAnswers,
  created,
  goodAnswers,
  lastOccurenceInQuiz,
  isWordKnown
}) => {
  const giveTime = lastOccurence => {
    const time = new Date(lastOccurence);
    const d = time.getDate();
    const y = time.getFullYear();
    const m = time.getMonth() + 1;
    return `${d}.${m}.${y}`;
  };

  const resultsText = [
    { text: "Łącznych odpowiedzi", spanText: allAnswers },
    { text: "Poprawny odpowiedzi", spanText: goodAnswers },
    {
      text: "Ostatnio odpowiadano",
      spanText:
        lastOccurenceInQuiz === "Brak" ? "Brak" : giveTime(lastOccurenceInQuiz)
    },
    { text: "Utworzono", spanText: created }
  ];

  const x = new Date(1574796905083);
  const wordResultsToRender = resultsText.map(({ text, spanText }) => (
    <S.WordResultItem isWordKnown={isWordKnown} key={text}>
      {text}
      <Span bold>{spanText}</Span>
    </S.WordResultItem>
  ));

  return <S.FireBoardResults>{wordResultsToRender}</S.FireBoardResults>;
};

FireBoardResults.propTypes = {
  allAnswers: PropTypes.number.isRequired,
  created: PropTypes.string.isRequired,
  goodAnswers: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  lastOccurenceInQuiz: PropTypes.any,
  isWordKnown: PropTypes.bool.isRequired
};

export default FireBoardResults;
