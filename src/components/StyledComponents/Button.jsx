import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: #ccbda4;
  color: #1c1308;
  padding: 5px;
  margin: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-radius: 5px;
  border-type: groove;
  border-color: #625434;
  font-family: "IM Fell DW Pica SC", serif;
  min-width: 5rem;
  max-width: 6rem;
  &:hover {
    -webkit-transform: scale(1.2);
    -ms-transform: scale(1.2);
    transform: scale(1.2);

    background-color: #a48454;
  }
`;

const Button = ({ onClick, children }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default Button;
