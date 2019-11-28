import React from "react";
import * as S from "./styles";
import { useHistory } from "react-router-dom";
import { ABOUT_APP } from "routes";
const Logo = () => {
  const history = useHistory();

  return (
    <S.LogoContainer>
      <S.Anchor onClick={() => history.push(ABOUT_APP)}>Wordzzz</S.Anchor>
    </S.LogoContainer>
  );
};
export default Logo;
