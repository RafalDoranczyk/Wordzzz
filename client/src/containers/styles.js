import styled, { keyframes } from "styled-components";

const move = keyframes`
from{

  opacity: 0;
}
to{

  opacity:1
}
`;
export const UserPageContainer = styled.div`
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.darkWhite};
`;

export const UserInnerContainer = styled.div`
  width: 100vw;
  max-width: 1200px;
  margin-top: 30px;
  background-color: ${({ theme }) => theme.colors.darkWhite};

  & > div {
    padding: 0 10px;
    animation: ${move} 0.4s ease-in;
  }
  @media (orientation: landscape) and (min-width: 800px) {
    margin: 60px auto 20px auto;
  }
`;
