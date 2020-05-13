import '../styles/SearchButton.css';
import React from 'react';

const searchButton = (props) => {
    return (
        <div className="SearchButton" onClick={() => props.search(document.getElementById("searchBar").value)}>
            Search
        </div>
    );
};

export default searchButton;