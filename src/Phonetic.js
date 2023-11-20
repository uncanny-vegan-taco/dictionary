import React from "react";

export default function Phonetic(props) {
  if (props.phonetic) {
    return (
      <span className="Phonetics">
        <p>{props.phonetic.text}</p>
        <a href={props.phonetic.audio} target="_blank">
          Listen
        </a>
      </span>
    );
  } else {
    return null;
  }
}
