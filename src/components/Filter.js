import React from 'react';

function Filter({ search, onSearchChange }) {
  const handleSearchChange = (event) => {
    onSearchChange(event.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search"
      value={search}
      onChange={handleSearchChange}
    />
  );
}

export default Filter;