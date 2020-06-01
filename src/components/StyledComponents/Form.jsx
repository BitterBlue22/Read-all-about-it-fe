import React from "react";
import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  border-style: ridge;
  border: 5px;
  border-color: black;
  padding: 10px;
  margin: 10px;
`;

const Form = ({ children }) => {
  return <StyledForm>{children}</StyledForm>;
};

export default Form;
