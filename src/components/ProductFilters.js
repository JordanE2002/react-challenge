import React from 'react';
import './ProductFilter.css';

const ProductFilters = ({
  selectedCategory,
  setSelectedCategory,
  minPrice,
  setMinPrice,
  maxPrice,
  setMaxPrice,
  inStockOnly,
  setInStockOnly,
  categories
}) => {
  return (
    <>
      {/* Category Filter */}
      <div>
        <label htmlFor="category-filter">Category:</label>
        <select
          id="category-filter"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">All</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Price Range */}
      <div className="price-range">
        <label>Price:</label>
        <input
          type="number"
          placeholder="Min"
          value={minPrice ?? ''}
          onChange={(e) => setMinPrice(e.target.value ? Number(e.target.value) : '')}
          min="0"
        />
        <span>-</span>
        <input
          type="number"
          placeholder="Max"
          value={maxPrice ?? ''}
          onChange={(e) => setMaxPrice(e.target.value ? Number(e.target.value) : '')}
          min="0"
        />
      </div>

      {/* In Stock Only */}
      <div className="in-stock">
        <input
          type="checkbox"
          id="in-stock-only"
          checked={inStockOnly}
          onChange={(e) => setInStockOnly(e.target.checked)}
        />
        <label htmlFor="in-stock-only">In Stock Only</label>
      </div>
    </>
  );
};

export default ProductFilters;
