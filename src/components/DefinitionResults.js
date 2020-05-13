import '../styles/DefinitionResults.css';
import Definition from './Definition';
import React from 'react';

const definitionResults = (props) => {
    let result = null;

    if(props.definitionsLoading) {
        if(props.definitionsError) {
            result = (
                <div className="DefinitionsResults">
                    Error
                </div>
            );
        } else {
            result = (
                <div className="DefinitionResults">
                    Loading Definitions
                </div>
            );
        }
    } else {
        if(props.definitions) {
            result = (
                <div className="DefinitionResults">
                    {props.definitions.map((definition, index) => {
                        return (
                            <Definition definition={definition.definicion} key={index}/>
                        );
                    })}
                </div>
            );
        }
    }

    return result;
}

export default definitionResults ;