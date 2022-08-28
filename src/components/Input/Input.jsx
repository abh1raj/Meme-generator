import React from "react";
import { useState } from "react";
import "./Input.css";

export default function Input(props) {
  const [inputVal, setInputVal] = useState("");

  function handleChange(e) {
    setInputVal(e.target.value);
  }

  return (
    <input
      type="text"
      placeholder={props.placeholder}
      onChange={(e) => {
        handleChange(e);
        props.setImageText(e);
      }}
      value={inputVal}
      name={props.name}
    />
  );
}
