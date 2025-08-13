import React from 'react';
import './ProductSorting.css';

export default function ProductSorting({ sortOption, setSortOption }) {
  // Active only if a sort option is selected (not empty)
  const isActive = sortOption && sortOption.trim() !== '';

  return (
    <div className={`sort-container ${isActive ? 'active' : ''}`}>
      <label htmlFor="sort">Sort By:</label>
      <select
        id="sort"
        value={sortOption}
        onChange={(e) => setSortOption(e.target.value)}
      >
        <option value="">None</option>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
        <option value="rating-asc">Rating: Low to High</option>
        <option value="rating-desc">Rating: High to Low</option>
      </select>
    </div>
  );
}
