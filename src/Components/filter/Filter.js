import React from "react";

const Filter = ({ filter, getFilter }) => {
  return (
    <>
      <label>
        <p>Find contacts by name</p>
        <input type="text" name="filter" value={filter} onChange={getFilter} />
      </label>
    </>
  );
};

export default Filter;
