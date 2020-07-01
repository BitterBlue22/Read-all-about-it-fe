import React from "react";
import styled from "styled-components";

const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 3px;
  border-style: outset;
  border-color: #d9b08c;
  border-radius: 3px;
  padding: 10px;
  margin: 5px;
  background-color: #ffcb9a;
  font-family: "Montserrat", sans-serif;
  &:hover {
    border-color: #ffcb9a;
    transition: all 500ms ease;
  }
`;

const StyledCard = ({ children }) => {
  return <StyledArticle>{children}</StyledArticle>;
};

export default StyledCard;
