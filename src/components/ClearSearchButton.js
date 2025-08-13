    // src/components/ClearSearchButton.js
    import React from 'react';
    import './ClearButtons.css';

    const ClearSearchButton = ({ onClick }) => {
    return (
        <button className="clear-search-btn" onClick={onClick}>
        Clear Search
        </button>
    );
    };

    export default ClearSearchButton;
