import React from "react";
import "./Images.css";

export default function Images(props) {
  if (props.photos) {
    return (
      <div className="Images">
        {props.photos.map(function (photo, index) {
          return (
            <div key={index}>
              <a href={photo.src.original} target="_blank" rel="noreferrer">
                <img src={photo.src.portrait} />
              </a>
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
