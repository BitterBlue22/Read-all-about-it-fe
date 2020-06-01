import React from "react";
import styled from "styled-components";

const StyledBoard = styled.section`
  background-color: transparent;
  display: flex;
  flex-wrap: wrap;
`;
const Board = ({ children }) => {
  return <StyledBoard>{children}</StyledBoard>;
};

export default Board;
