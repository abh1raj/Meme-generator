import React from "react";
import "./ImageText.css";

export default function ImageText(props) {
  return (
    <span
      className={
        props.pos === "top" ? "top " + "img-text" : "bottom " + "img-text"
      }
    >
      {props.text}
    </span>
  );
}
