import '../styles/SearchBar.css';
import React from 'react';

const searchBar = (props) => {
    return (
        <div className="SearchBar">
            <input id="searchBar" className="SearchBar" type="text" placeholder="word"/>
        </div>
    );
};

export default searchBar;