import React from 'react';

export default function ProductSearch({ searchTerm, setSearchTerm }) {
  return (
    <div className="search-wrapper">
      <label htmlFor="search-name" className="visually-hidden">
        Search products
      </label>
      <input
        id="search-name"
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
    </div>
  );
}
