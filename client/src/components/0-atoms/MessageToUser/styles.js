import styled, { css, keyframes } from "styled-components";

const move = keyframes`
0%{
  opacity: 0;
  transform: translateY(-10px)
}
15%{
  opacity: 1;
  transform: translateY(0)
}
85%{
  opacity: 1;
  transform: translateY(0)
}

100%{
  opacity: 1;
   transform: translateY(0)
}
`;

export const MessageToUser = styled.div(
  ({ children, theme, isMessageSuccess, big }) => css`
    height: 30px;
    text-align: center;
    z-index: 1;
    font-size: ${big ? "1.6rem" : "1.2rem"};
    font-weight: 700;
    opacity: 1;
    color: ${isMessageSuccess ? theme.colors.green : theme.colors.red};
    animation: ${children &&
      css`
        ${move} 1.5s
      `};
  `
);
