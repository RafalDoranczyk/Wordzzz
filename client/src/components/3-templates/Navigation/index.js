import React, { useRef } from "react";
import * as S from "./styles";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import UseDetectOutsideClick from "hooks/useDetectOutsideClick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "components/0-atoms/Logo";
import Burger from "components//1-molecules/Burger";
import * as routes from "routes";

const Nav = ({
  navigationData,
  isMenuShowed,
  setMenuShowed,
  wordsForRankedQuizNumber
}) => {
  const history = useHistory();

  const navRef = useRef(null);
  UseDetectOutsideClick(navRef, () => setMenuShowed(false));

  const listElements = navigationData.map(({ text, icon, onClick }) => {
    return (
      <S.ListElement
        tabIndex={isMenuShowed ? "1" : "-1"}
        onClick={onClick}
        key={text}
      >
        <S.IconContainer>
          <FontAwesomeIcon icon={icon} />
        </S.IconContainer>
        <S.Anchor>{text}</S.Anchor>
      </S.ListElement>
    );
  });

  return (
    <S.Container ref={navRef}>
      <S.Inner>
        <Logo />
        <S.Bell
          wordsForRankedQuizNumber={wordsForRankedQuizNumber}
          onClick={() => history.push(routes.TEST_RANKED)}
        >
          {wordsForRankedQuizNumber > 0 && (
            <S.RepeatNumber>{wordsForRankedQuizNumber}</S.RepeatNumber>
          )}

          <FontAwesomeIcon icon='bell' />
        </S.Bell>
        <S.Navigation isMenuShowed={isMenuShowed}>
          <S.List>{listElements}</S.List>
        </S.Navigation>
        <Burger
          isMenuShowed={isMenuShowed}
          onClick={() => setMenuShowed(!isMenuShowed)}
        />
      </S.Inner>
    </S.Container>
  );
};

Nav.propTypes = {
  navigationData: PropTypes.array.isRequired,
  onLogoutIconClick: PropTypes.func.isRequired,
  isMenuShowed: PropTypes.bool.isRequired,
  setMenuShowed: PropTypes.func.isRequired
};

export default Nav;
