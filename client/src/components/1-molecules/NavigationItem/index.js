import React from "react";
import * as S from "./styles";
import PropTypes from "prop-types";
import { FontawesomeIcon } from "@fortawesome/react-fontawesome";

const NavigationItem = ({ isActive, icon, onClick, linkTo }) => (
  <S.NavigationItem onClick={onClick} isActive={isActive} linkTo={linkTo}>
    <a href={linkTo}></a>
    <FontawesomeIcon icon={icon} />
  </S.NavigationItem>
);

NavigationItem.propTypes = {
  isActive: PropTypes.bool.isRequired,
  icon: PropTypes.string.isRequired,
  onClick: PropTypes.bool.isRequired,
  linkTo: PropTypes.string.isRequired
};

export default NavigationItem;
