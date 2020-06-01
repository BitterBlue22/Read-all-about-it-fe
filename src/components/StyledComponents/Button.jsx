import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: rgb(33, 200, 192);
  color: black;
  padding: 5px;
  margin: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-radius: 5px;
  font-family: "Montserrat", sans-serif;

  &:hover {
    left: 7px;
    background-color: #cb2d6f;
  }
`;

const Button = ({ onClick, children }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default Button;
