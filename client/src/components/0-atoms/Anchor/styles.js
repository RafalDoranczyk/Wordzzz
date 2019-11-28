import styled, { css } from "styled-components";

export const Anchor = styled.a(
  ({ theme }) => css`
    display: block;
    background: ${theme.colors.green};
    width: 160px;
    margin: 0 0 40px 0;
    padding: 4px 0;
    border-radius: 3px;
    font-size: 1.6rem;
    letter-spacing: 1px;
    text-decoration: none;
    padding: 8px;
    text-align: center;
    position: relative;
    color: ${theme.colors.white};
    box-shadow: 0 0 2px 2px ${theme.colors.blue};
    transition: 0.2s ease-in transform;
    &:hover {
      transform: translateY(-3px);
    }
  `
);
