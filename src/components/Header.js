import SearchButton from './SearchButton';
import SearchBar from './SearchBar';
import '../styles/Header.css';
import React from 'react';

const header = (props) => {
    return (
        <div className="Header">
            <SearchBar />
            <SearchButton search={props.search}/>
        </div>
    );
};

export default header;