    // src/components/ClearSearchButton.js
    import React from 'react';

  

    const ClearSearchButton = ({ onClick }) => {
    return (
        <button className="clear-search-btn" onClick={onClick}>
        Clear Search
        </button>
    );
    };

    export default ClearSearchButton;
