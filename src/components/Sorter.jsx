import React from "react";

const Sorter = ({ handleSort }) => {
  const handleChange = ({ target: { value } }) => {
    handleSort(value);
  };

  return (
    <section>
      <label htmlFor="query">Sort by: </label>
      <select onChange={handleChange}>
        <option name="created_at">created_at</option>
        <option name="votes">votes</option>
        <option name="comment_count">comment_count</option>
      </select>
    </section>
  );
};

export default Sorter;
