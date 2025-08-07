import React from 'react';

const ClearFiltersButton = ({ onClick }) => {
  return (
    <button className="clear-filters-btn" onClick={onClick}>
      Clear Filters
    </button>
  );
};

export default ClearFiltersButton;
