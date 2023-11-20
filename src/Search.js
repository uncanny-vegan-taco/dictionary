import React, { useState } from "react";
import axios from "axios";

export default function Search() {
  let [word, setWord] = useState(null);
  function showDefinition(response) {
    console.log(response.data);
  }
  function handleSubmit(event) {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    event.preventDefault();
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
      <div>
        <h2>{word}</h2>
      </div>
    </div>
  );
}
