import Header from './components/Header';
import React, { useState } from 'react';
import Body from './components/Body';
import axios from 'axios';
import './styles/App.css';

function App() {
  const proxy = "https://cors-anywhere.herokuapp.com/";

  const definitionEndpoint = "http://sesat.fdi.ucm.es:8080/servicios/rest/definicion/json/";
  const synonymEndpoint = "http://sesat.fdi.ucm.es:8080/servicios/rest/sinonimos/json/";
  const antonymEndpoint = "http://sesat.fdi.ucm.es:8080/servicios/rest/antonimos/json/";

  const [definitions, setDefinitions] = useState(undefined);
  const [synonyms, setSynonyms] = useState(undefined);
  const [antonyms, setAntonyms] = useState(undefined);

  const [definitionsLoading, setDefinitionsLoading] = useState(false);
  const [synonymsLoading, setSynonymsLoading] = useState(false);
  const [antonymsLoading, setAntonymsLoading] = useState(false);

  const [definitionsError, setDefinitionsError] = useState(false);
  const [synonymsError, setSynonymsError] = useState(false);
  const [antonymsError, setAntonymsError] = useState(false);

  const searchHandler = (word) => {
    document.getElementById("searchBar").value = word;

    setDefinitionsLoading(true);
    setSynonymsLoading(true);
    setAntonymsLoading(true);

    setDefinitionsError(false);
    setSynonymsError(false);
    setAntonymsError(false);

    axios.get(`${proxy}${definitionEndpoint}${word}`).then((response, error) => {
      setDefinitions(response.data.definiciones);
      setDefinitionsLoading(false);

      if(error) {
        setDefinitionsError(true);
      }
    });

    axios.get(`${proxy}${synonymEndpoint}${word}`).then((response, error) => {
      setSynonyms(response.data.sinonimos);
      setSynonymsLoading(false);

      if(error) {
        setSynonymsError(true);
      }
    });

    axios.get(`${proxy}${antonymEndpoint}${word}`).then((response, error) => {
      setAntonyms(response.data.antonimos);
      setAntonymsLoading(false);

      if(error) {
        setAntonymsError(true);
      }
    });
  }

  return (
    <div className="App">
      <Header search={searchHandler}/>
      <Body definitions={definitions} definitionsLoading={definitionsLoading} definitionsError={definitionsError} synonyms={synonyms} synonymsLoading={synonymsLoading} synonymsError={synonymsError} antonyms={antonyms} antonymsLoading={antonymsLoading} antonymsError={antonymsError} search={searchHandler}/>
    </div>
  );
};

export default App;