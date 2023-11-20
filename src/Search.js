import React, { useState } from "react";

export default function Search() {
  let [word, setWord] = useState(null);
  function handleSubmit(event) {
    event.preventDefault();
    console.log(word);
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
