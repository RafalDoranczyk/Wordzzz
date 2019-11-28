import styled, { css } from "styled-components";

export const Span = styled.span(
  ({ bold }) => css`
    font-weight: ${bold && "700"};
  `
);
