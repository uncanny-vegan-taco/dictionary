import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Search.css";

export default function Search() {
  let [word, setWord] = useState(null);
  let [results, setResults] = useState(null);
  function showDefinition(response) {
    console.log(response.data);
    setResults(response.data[0]);
  }
  function handleSubmit(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

    axios.get(apiUrl).then(showDefinition);
  }
  function updateWord(event) {
    setWord(event.target.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Type a word here..."
          onChange={updateWord}
        />
        <input type="submit" className="btn btn-primary" />
      </form>
      <Results results={results} />
    </div>
  );
}
