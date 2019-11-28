import React from "react";
import * as S from "./styles";
import PropTypes, { oneOfType } from "prop-types";

const Caption = ({ children, captionRef }) => (
  <S.Caption ref={captionRef}>
    <S.Text bold uppercase>
      {children}
    </S.Text>
  </S.Caption>
);

Caption.propTypes = {
  children: oneOfType([PropTypes.array, PropTypes.string])
};

export default Caption;
