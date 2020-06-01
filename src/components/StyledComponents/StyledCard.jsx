import React from "react";
import styled from "styled-components";

const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 10px;
  border-style: outset;
  border-color: #282c34;
  padding: 10px;
  margin: 10px;
  background-color: #501f3a;
`;

const StyledCard = ({ children }) => {
  return <StyledArticle>{children}</StyledArticle>;
};

export default StyledCard;
