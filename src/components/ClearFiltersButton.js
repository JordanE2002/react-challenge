import React from 'react';
import './ClearButtons.css';

const ClearFiltersButton = ({ onClick }) => {
  return (
    <button className="clear-filters-btn" onClick={onClick}>
      Clear Filters
    </button>
  );
};

export default ClearFiltersButton;
