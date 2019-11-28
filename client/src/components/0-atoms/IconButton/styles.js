import styled, { css } from "styled-components";

export const IconButton = styled.button(
  ({ theme, color }) =>
    css`
      height: 25px;
      width: 25px;
      font-size: 1.6rem;
      color: ${color && theme.colors[color]};
      opacity: 0.8;
      cursor: pointer;
      &:hover {
        opacity: 1;
      }
    `
);
