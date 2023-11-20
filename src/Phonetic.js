import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  if (props.phonetic) {
    return (
      <span className="Phonetics">
        <p>
          {props.phonetic.text}
          <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
            Listen
          </a>
        </p>
      </span>
    );
  } else {
    return null;
  }
}
