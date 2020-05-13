import '../styles/Antonym.css';
import React from 'react';

const antonym = (props) => {
    return (
        <div className="Antonym" onClick={() => props.search(props.antonym)}>
            {props.antonym}
        </div>
    );
}

export default antonym;