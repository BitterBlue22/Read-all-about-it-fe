import React from "react";
import styled from "styled-components";

const StyledBoard = styled.section`
  background-color: transparent;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 32px;
  grid-auto-flow: dense;
`;
const Board = ({ children }) => {
  return <StyledBoard>{children}</StyledBoard>;
};

export default Board;
