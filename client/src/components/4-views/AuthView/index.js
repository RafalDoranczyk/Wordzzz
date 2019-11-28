import React from "react";
import * as S from "./styles";
import UseDroppingWords from "hooks/useDroppingWords";
import AuthContent from "components/3-templates/AuthContent";

const AuthPage = () => (
  <S.AuthPage>
    <UseDroppingWords containerWidth='100vw' containerHeight='100vh' />
    <AuthContent />
  </S.AuthPage>
);

export default AuthPage;
