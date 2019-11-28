import React from "react";
import * as S from "./styles";

const Span = ({ children, bold }) => <S.Span bold={bold}>{children}</S.Span>;

export default Span;
