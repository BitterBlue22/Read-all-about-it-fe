import React from "react";
import styled from "styled-components";

const StyledSelection = styled.select`
  border: 2px inset;
  border-radius: 5px;
  display: flex;
  min-height: 30px;
  padding: 5px;
  margin: 10px;
  flex-direction: column;
  justify-content: space-around;
  font-family: "Montserrat", sans-serif;
`;

const StyledSection = styled.section`
  border: 2px groove;
  border-radius: 5px;
  margin: 10px;
  padding: 10px;
  display: flex;
  flex-direction; column;
  justify-content: center;
  align-items: center;
  font-family: "Montserrat", sans-serif;
  max-width: 300px;
  max-height: 100px;
  min-width: auto;
`;

const Sorter = ({ handleSort }) => {
  const handleChange = ({ target: { value } }) => {
    handleSort(value);
  };

  return (
    <StyledSection className="sorter">
      <label htmlFor="query">Sort by: </label>
      <StyledSelection onChange={handleChange} className="selector">
        <option name="created_at">created_at</option>
        <option name="votes">votes</option>
        <option name="comment_count">comment_count</option>
      </StyledSelection>
    </StyledSection>
  );
};

export default Sorter;
