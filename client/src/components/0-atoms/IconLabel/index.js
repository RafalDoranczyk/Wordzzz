import React from "react";
import * as S from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const IconLabel = ({ name, icon }) => (
  <S.IconLabel htmlFor={name}>
    <FontAwesomeIcon size='lg' color='white' icon={icon} />
  </S.IconLabel>
);

export default IconLabel;
