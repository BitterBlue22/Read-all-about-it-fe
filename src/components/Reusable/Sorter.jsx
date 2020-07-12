import React from "react";
import styled from "styled-components";

const StyledSelection = styled.select`
  border: 2px inset;
  border-radius: 5px;
  border-color: #625434;
  color: #1c1308;
  display: flex;
  min-height: 30px;
  padding: 5px;
  margin: 10px;
  flex-direction: column;
  justify-content: space-around;
  background-color: #ccbda4;
  font-family: "Cutive Mono", monospace;
  font-size: large;
`;

const StyledSection = styled.section`
  border: 2px groove;
  border-radius: 5px;
  border-color: #e4c49b;
  color: #ccbda4;
  background-color: #1c1308;
  margin: 10px;
  padding: 10px;
  display: flex;
  flex-direction; column;
  justify-content: center;
  align-items: center;
  font-family:  "IM Fell DW Pica SC", serif;
  max-width: 300px;
  max-height: 100px;
  min-width: auto;
  font-size: large;

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
