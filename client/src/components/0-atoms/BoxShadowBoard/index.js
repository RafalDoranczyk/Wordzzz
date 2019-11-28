import styled from "styled-components";

export const BoxShadowBoard = styled.div`
  cursor: pointer;
  border-radius: 5px;
  box-shadow: 0px 5px 3px rgba(0, 0, 0, 0.12), 0 5px 2px rgba(0, 0, 0, 0.24);
  transition: 0.3s transform ease, 0.3s box-shadow ease;
  -webkit-tap-highlight-color: transparent;
  &:hover {
    box-shadow: 0 18px 18px rgba(0, 0, 0, 0.25), 0 6px 6px rgba(0, 0, 0, 0.22);
  }
`;
