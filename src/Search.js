import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Images from "./Images";
import "./Search.css";

export default function Search(props) {
  let [word, setWord] = useState(props.defaultWord);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function showDefinition(response) {
    console.log(response.data);
    setResults(response.data[0]);
  }
  function handleSubmit(event) {
    event.preventDefault();
    getInfo();
  }
  function updateWord(event) {
    setWord(event.target.value);
  }
  function showImages(response) {
    setPhotos(response.data.photos);
  }

  function load() {
    setLoaded(true);
    getInfo();
  }

  function getInfo() {
    let imageApiKey = "ab845e08702fbc3c99tc4fo5b8bf92c3";
    let imageApiUrl = `https://api.shecodes.io/images/v1/search?query=${word}&key=${imageApiKey}`;
    let wordapiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(wordapiUrl).then(showDefinition);
    axios.get(imageApiUrl).then(showImages);
  }
  if (loaded) {
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Type a word here..."
            onChange={updateWord}
            default={props.defaultWord}
          />
        </form>
        <Results results={results} />
        <Images photos={photos} />
      </div>
    );
  } else load();
  return "Loading...";
}
