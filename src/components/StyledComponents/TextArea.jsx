import React from "react";
import styled from "styled-components";

const StyledTextArea = styled.textarea`
  border: 5px inset;
  border-radius: 5px;
  border-color: #625434;
  display: flex;
  padding: 5px;
  margin: 5px;
  flex-direction: column;
  justify-content: space-between;
  font-family: "Montserrat", sans-serif;
  min-height: 200px;
  min-width: 400px;
  resize: both;
  background-color: #ccbda4;
  @media only screen and (max-width: 700px) {
    min-height: 100px;
    min-width: 200px;
  }
`;
const TextArea = ({ required, children, onChange, placeholder }) => {
  return (
    <StyledTextArea
      required={required}
      onChange={onChange}
      placeholder={placeholder}
    >
      {children}
    </StyledTextArea>
  );
};

export default TextArea;
