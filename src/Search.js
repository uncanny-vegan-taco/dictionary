import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Images from "./Images";
import "./Search.css";

export default function Search() {
  let [word, setWord] = useState(null);
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);
  function showDefinition(response) {
    console.log(response.data);
    setResults(response.data[0]);
  }
  function handleSubmit(event) {
    event.preventDefault();
    Search();
  }
  function updateWord(event) {
    setWord(event.target.value);
  }
  function showImages(response) {
    setPhotos(response.data.photos);
  }

  function Search() {
    let imageApiKey = "ab845e08702fbc3c99tc4fo5b8bf92c3";
    let imageApiUrl = `https://api.shecodes.io/images/v1/search?query=${word}&key=${imageApiKey}`;
    let wordapiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(wordapiUrl).then(showDefinition);
    axios.get(imageApiUrl).then(showImages);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Type a word here..."
          onChange={updateWord}
        />
      </form>
      <Results results={results} />
      <Images photos={photos} />
    </div>
  );
}
