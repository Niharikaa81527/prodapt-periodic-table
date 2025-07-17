import React from 'react';

function SearchBar({ searchQuery, setSearchQuery }) {
  return (
    <div className="search-bar-container">
      <input
        id="search-bar"
        type="text"
        placeholder="Search tools..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;