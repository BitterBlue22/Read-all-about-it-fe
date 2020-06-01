import React from "react";
import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  color: #black;
  border-style: ridge;
  border: 5px;
  border-radius: 6px;
  border-color: cb2d6f;
  padding: 10px;
  margin: 10px;
  font-family: "Montserrat", sans-serif;
`;

const Form = ({ children }) => {
  return <StyledForm>{children}</StyledForm>;
};

export default Form;
