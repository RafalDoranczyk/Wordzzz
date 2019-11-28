import React from "react";
import * as S from "./styles";
import PropTypes from "prop-types";

const MessageToUser = ({ children, isMessageSuccess, big }) => {
  return (
    <S.MessageToUser big={big} isMessageSuccess={isMessageSuccess}>
      {children}
    </S.MessageToUser>
  );
};

MessageToUser.propTypes = {
  children: PropTypes.string,
  isMessageSuccess: PropTypes.bool,
  big: PropTypes.bool
};

export default MessageToUser;
