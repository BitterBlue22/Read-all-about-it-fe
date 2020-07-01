import React from "react";
import styled from "styled-components";

const StyledGeneralHeading = styled.h2`
  font-family: "Permanent Marker", cursive;
  color: #2c3531;
  text-align: center;
  max-width: 90%;
`;
const HeadingGeneral = ({ children }) => {
  return <StyledGeneralHeading>{children}</StyledGeneralHeading>;
};

export default HeadingGeneral;
