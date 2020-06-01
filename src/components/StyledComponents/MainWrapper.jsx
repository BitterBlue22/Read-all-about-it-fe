import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.section`
  background-color: white;
  padding: 10px;
  min-height: 100%;
  position: sticky;
  margin: 0;
`;

const MainWrapper = ({ children }) => {
  return <StyledWrapper>{children}</StyledWrapper>;
};

export default MainWrapper;
