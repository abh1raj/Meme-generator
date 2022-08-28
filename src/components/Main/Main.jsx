import React, { useState, useEffect } from "react";
import Button from "../Button/Button";
import ImageText from "../ImageText/ImageText";
import Input from "../Input/Input";
import MemeImage from "../MemeImage/MemeImage";
import "./Main.css";

export default function Main() {
  const [memeUrl, setMemeUrl] = useState("abc");
  const [randomNum, setRandomNum] = useState(1);
  const [imgText, setImgText] = useState({
    top: "",
    bottom: "",
  });

  function handleClick(e) {
    e.preventDefault();
    const randomIndex = Math.floor(Math.random() * 100);
    setRandomNum(randomIndex);
  }

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setMemeUrl(data.data.memes[randomNum].url));
  }, [randomNum]);

  function setImageText(e) {
    const { name, value } = e.target;
    setImgText((prevText) => {
      return {
        ...prevText,
        [name]: value,
      };
    });
  }

  return (
    <main>
      <div className="wrapper">
        <form>
          <div className="input-container">
            <Input
              placeholder="Top text"
              name="top"
              setImageText={setImageText}
            />
            <Input
              placeholder="Bottom text"
              name="bottom"
              setImageText={setImageText}
            />
          </div>
          <Button text="Get a new meme image" handleClick={handleClick} />
        </form>
        <div className="meme-image-container">
          <MemeImage memeUrl={memeUrl} />
          <ImageText pos="top" text={imgText.top} />
          <ImageText pos="bottom" text={imgText.bottom} />
        </div>
      </div>
    </main>
  );
}
