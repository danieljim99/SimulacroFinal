import '../styles/AntonymResults.css';
import Antonym from './Antonym';
import React from 'react';

const antonymResults = (props) => {
    let result = null;

    if(props.antonymsLoading) {
        if(props.antonymsError) {
            result = (
                <div className="AntonymResults">
                    Error
                </div>
            );
        } else {
            result = (
                <div className="AntonymResults">
                    Loading Antonyms
                </div>
            );
        }
    } else {
        if(props.antonyms) {
            result = (
                <div className="AntonymResults">
                    {props.antonyms.map((antonym, index) => {
                        return (
                            <Antonym antonym={antonym.antonimo} search={props.search} key={index}/>
                        );
                    })}
                </div>
            );
        }
    }

    return result;
};

export default antonymResults;