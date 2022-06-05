import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

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
      <img src={srcImg} alt="" className="noise_img" />
      <Input
        img={srcImg}
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
      />
    </div>
  );
}

const Input = styled.input`
  width: 15rem;
  accent-color: rgb(255, 255, 255, 0.5);
`;

export default Noise;
