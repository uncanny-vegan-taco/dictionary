import React, { useState } from "react";
import "./Images.css";

export default function Images(props) {
  if (props.photos) {
    return (
      <div className="Images">
        {props.photos.map(function (photo, index) {
          return (
            <a href={photo.src.original} target="_blank" rel="noreferrer">
              <img key={index} src={photo.src.portrait} />
            </a>
          );
        })}
      </div>
    );
  } else return null;
}
