import React from "react";
import "./MemeImage.css";

export default function MemeImage(props) {
  return <img src={props.memeUrl} alt="meme image" className="meme-image" />;
}
