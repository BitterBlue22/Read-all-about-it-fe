import React from "react";
import styled, { css } from "styled-components";

const StyledInput = styled.input`
  border: 5px inset;
  border-radius: 5px;
  border-color: #625434;
  display: flex;
  padding: 5px;
  margin: 5px;
  flex-direction: column;
  justify-content: space-between;
  background-color: #ccbda4;
  font-family: "Cutive Mono", monospace;

  ${({ size }) =>
    size === "big" && css
      ? `
          min-height: 50px;
          min-width: 400px;
          
        `
      : "medium" &&
        css`
          min-height: 20px;
          min-width: 400px;
        `};
  @media only screen and (max-width: 700px) {
    min-width: auto;
    min-height: auto;
  }
`;

const InputBox = ({ required, name, onChange, size, type, placeholder }) => {
  return (
    <StyledInput
      required={required}
      name={name}
      onChange={onChange}
      size={size}
      type={type}
      placeholder={placeholder}
    />
  );
};

export default InputBox;
