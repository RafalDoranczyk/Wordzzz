import styled, { css } from "styled-components";

export const Text = styled.p(
  ({ theme, bold, small, big, color, justify, center, uppercase }) => css`
    font-weight: ${bold && "700"};
    font-size: ${small ? "1.25rem" : big ? "1.8rem" : "1.5rem"};
    color: ${color ? theme.colors[color] : theme.colors.navyBlue};
    text-align: ${justify ? "justify" : center && "center"};
    text-transform: ${uppercase && "uppercase"};
    word-wrap: break-word;
    line-height: 180%;
    @media ${theme.queries.iPad} {
      font-size: ${small ? "1.6rem" : big ? "2.2rem" : "1.9rem"};
    }
    @media ${theme.queries.iPadPro} {
      font-size: ${small ? "2.3rem" : big ? "3.2rem" : "2.7rem"};
    }
  `
);
