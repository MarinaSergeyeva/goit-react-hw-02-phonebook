import React from "react";

const Filter = ({ contacts, filter, getFilter }) => {
  return (
    <>
      <label>
        <p>Find contacts by name</p>
        <input type="text" name="filter" onChange={getFilter} />
      </label>
    </>
  );
};

export default Filter;
