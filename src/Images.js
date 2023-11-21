import React, { useState } from "react";
import "./Images.css";

export default function Images(props) {
  if (props.photos) {
    return (
      <div className="Images">
        {props.photos.map(function (photo, index) {
          return (
            <div key={index}>
              <img src={photo.src.portrait} />
            </div>
          );
        })}
      </div>
    );
  } else return null;
}
