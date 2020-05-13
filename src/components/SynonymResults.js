import '../styles/SynonymResults.css';
import Synonym from './Synonym';
import React from 'react';

const synonymResults = (props) => {
    let result = null;

    if(props.synonymsLoading) {
        if(props.definitionsError) {
            result = (
                <div className="SynonymResults">
                    Error
                </div>
            );
        } else {
            result = (
                <div className="SynonymResults">
                    Loading Synonyms
                </div>
            );
        }
    } else {
        if(props.synonyms) {
            result = (
                <div className="SynonymResults">
                    {props.synonyms.map((synonym, index) => {
                        return (
                            <Synonym synonym={synonym.sinonimo} search={props.search} key={index}/>
                        );
                    })}
                </div>
            );
        }
    }

    return result;
}

export default synonymResults;