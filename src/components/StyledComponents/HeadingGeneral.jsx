import React from "react";
import styled from "styled-components";

const StyledGeneralHeading = styled.h2`
  font-family: "Permanent Marker", cursive;
  color: #cccccc;
`;
const HeadingGeneral = ({ children }) => {
  return <StyledGeneralHeading>{children}</StyledGeneralHeading>;
};

export default HeadingGeneral;
