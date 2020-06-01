import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: white;
  color: black;
  padding: 5px;
  margin: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-radius: 5px;
  font-family: "Montserrat", sans-serif;
  text-decoration: none;
`;

const Button = ({ children }) => {
  return <StyledButton>{children}</StyledButton>;
};

export default Button;
