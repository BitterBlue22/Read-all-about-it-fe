import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  border: 5px inset;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const InputBox = () => {
  return <StyledInput />;
};

export default InputBox;
