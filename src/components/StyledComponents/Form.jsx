import React from "react";
import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: #116466;
  color: #black;
  border-style: ridge;
  padding: 20px;
  margin: 2rem;
  font-family: "Montserrat", sans-serif;
  border-color: #2c3531;
  border-radius: 5px;
  @media only screen and (max-width: 700px) {
    margin: 2rem;
  }
`;

const Form = ({ name, onSubmit, children }) => {
  return (
    <StyledForm name={name} onSubmit={onSubmit}>
      {children}
    </StyledForm>
  );
};

export default Form;
