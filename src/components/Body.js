import DefinitionResults from './DefinitionResults';
import SynonymResults from './SynonymResults';
import AntonymResults from './AntonymResults';
import '../styles/Body.css';
import React from 'react';

const body = (props) => {
    return (
        <div className="Body">
            <div className="DefinitionsBlock">
                <DefinitionResults definitions={props.definitions} definitionsLoading={props.definitionsLoading} definitionsError={props.definitionsError}/>
            </div>
            <div className="SynonymsAntonyms">
                <SynonymResults synonyms={props.synonyms} synonymsLoading={props.synonymsLoading} synonymsError={props.synonymsError} search={props.search}/>
                <AntonymResults antonyms={props.antonyms} antonymsLoading={props.antonymsLoading} antonymsError={props.antonymsError} search={props.search}/>
            </div>
        </div>
    );
};

export default body;