import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: #2c3531;
  color: white;
  padding: 5px;
  margin: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-radius: 5px;
  border-type: groove;
  font-family: "Montserrat", sans-serif;
  min-width: 5rem;
  max-width: 6rem;
  &:hover {
    -webkit-transform: scale(1.2);
    -ms-transform: scale(1.2);
    transform: scale(1.2);

    background-color: #116466;
  }
`;

const Button = ({ onClick, children }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default Button;
