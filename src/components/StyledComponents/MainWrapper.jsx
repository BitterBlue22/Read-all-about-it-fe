import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.main`
  background-color: #1a1a1d;
  padding: 20px;
  height: 100%;
  position: fixed;
  min-height: 100%;
  width: 100%;
  margin: 0;
  flex-wrap: wrap;
`;

const MainWrapper = ({ children }) => {
  return <StyledWrapper>{children}</StyledWrapper>;
};

export default MainWrapper;
