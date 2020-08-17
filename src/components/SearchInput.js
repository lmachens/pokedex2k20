import "./SearchInput.css";
import React from "react";

function SearchInput({ value, onChange }) {
  return (
    <input
      className="searchInput"
      placeholder="Enter name"
      value={value}
      onChange={(event) => onChange(event.target.value.trim())}
    />
  );
}

export default SearchInput;
