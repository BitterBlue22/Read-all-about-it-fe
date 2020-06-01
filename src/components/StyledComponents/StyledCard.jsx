import React from "react";
import styled from "styled-components";

const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 3px;
  border-style: outset;
  border-color: #14a098;
  border-radius: 3px;
  padding: 10px;
  margin: 5px;
  background-color: white;
  font-family: "Montserrat", sans-serif;
  position: relative;
`;

const StyledCard = ({ children }) => {
  return <StyledArticle>{children}</StyledArticle>;
};

export default StyledCard;
