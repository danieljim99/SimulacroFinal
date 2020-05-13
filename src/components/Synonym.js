import '../styles/Synonym.css';
import React from 'react';

const synonym = (props) => {
    return (
        <div className="Synonym" onClick={() => props.search(props.synonym)}>
            {props.synonym}
        </div>
    );
}

export default synonym;