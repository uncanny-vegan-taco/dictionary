import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";
import Images from "./Images";
import "./Results.css";

export default function Definitions(props) {
  if (props.results) {
    return (
      <div>
        <div className="title">
          <h2>{props.results.word}</h2>
          {props.results.phonetics.map(function (phonetic, index) {
            return (
              <div key={index}>
                <Phonetic phonetic={phonetic} />
              </div>
            );
          })}
        </div>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
