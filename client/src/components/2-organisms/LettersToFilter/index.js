import React from "react";
import * as S from "./styles";
import PropTypes from "prop-types";

const LettersToFilter = ({
  onLetterClick,
  lettersToFilter,
  activeLetter,
  pageNumbersToFilter,
  onPageNumberClick,
  activePageNumber
}) => {
  return (
    <S.Wrapper>
      <S.LetterButtons>
        {lettersToFilter.map(letter => (
          <S.LetterButton
            tabIndex='1'
            key={letter}
            onClick={() => onLetterClick(letter)}
            isActive={activeLetter === letter}
          >
            {letter}
          </S.LetterButton>
        ))}
      </S.LetterButtons>
      <S.PageButtons>
        {pageNumbersToFilter.map(num => (
          <S.PageButton
            tabIndex='1'
            isActive={activePageNumber === num}
            onClick={() => onPageNumberClick(num)}
            key={num}
          >
            {num}
          </S.PageButton>
        ))}
      </S.PageButtons>
    </S.Wrapper>
  );
};

LettersToFilter.propTypes = {
  onLetterClick: PropTypes.func.isRequired,
  lettersToFilter: PropTypes.array.isRequired,
  activeLetter: PropTypes.string,
  pageNumbersToFilter: PropTypes.array.isRequired,
  onPageNumberClick: PropTypes.func.isRequired,
  activePageNumber: PropTypes.number
};
export default LettersToFilter;
