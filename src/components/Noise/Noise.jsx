import React, { useState, useRef, useEffect } from "react";
import "./app.css";
function Noise({ item }) {
  const { id, name, srcImg, srcMusic } = item;
  const audioElement = useRef();

  const [volume, setVolume] = useState(0);

  useEffect(() => {
    audioElement.current.play();
    audioElement.current.volume = volume / 100;
  });

  return (
    <div className="noise" key={id}>
      <audio loop src={srcMusic} ref={audioElement}></audio>

      <div className="noise_name">{name}</div>
      <input
        type="range"
        id="vol"
        name="vol"
        min="0"
        max="100"
        value={volume}
        className="noise_icon"
        onChange={(e) => {
          setVolume(e.target.value);
        }}
        style={{
          width: "15rem",
        }}
      />
      {/* <img src={srcImg} alt="" /> */}
    </div>
  );
}

export default Noise;
