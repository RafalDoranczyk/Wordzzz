import styled, { css } from "styled-components";

export const NavigationItem = styled.li(
  ({ theme, isActive, linkTo }) => css`
    flex-basis: calc(100% / 7);
    ${theme.mixins.flex_center};
    font-size: 14px;
    margin: 0 2px;
    border-radius: 5px;
    transition: 0.3s ease transform, 0.3s ease box-shadow;
    transform: ${isActive ? "translateY(5px)" : "translateY(0)"};
    background-color: ${linkTo === "/"
      ? theme.colors.white
      : theme.colors.lightBlue};
    box-shadow: ${isActive && `0px 2px 2px 0px ${theme.colors.blue}`};
    color: ${linkTo === "/" ? theme.colors.red : `${theme.colors.white}`};
    border: ${linkTo === "/"
      ? `1px solid ${theme.colors.lightBlue}`
      : `1px solid ${theme.colors.blue}`};
    cursor: pointer;
    &:hover {
      box-shadow: 0px 2px 2px 0px ${theme.colors.blue};
    }
    opacity: ${isActive ? "1" : ".7"};
  `
);
