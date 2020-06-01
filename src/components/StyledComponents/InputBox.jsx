import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  border: 5px inset;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: "Montserrat", sans-serif;
`;

const InputBox = ({ required, name, onChange }) => {
  return <StyledInput required={required} name={name} onChange={onChange} />;
};

export default InputBox;
