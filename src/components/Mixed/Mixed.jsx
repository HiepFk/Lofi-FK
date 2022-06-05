import React, { useState } from "react";
import { HiVolumeOff, HiVolumeUp } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { setVolume } from "../../redux/musicSlice";
import Noise from "../Noise/Noise";
import { noise } from "../../data/ListNoise";

import "./app.css";
function Mixed({ hideMixed }) {
  const dispatch = useDispatch();
  const { volume } = useSelector((state) => state.music);

  const [value, setValue] = useState(volume);

  return (
    <>
      <div className={hideMixed ? "mixed" : "mixed hidden"}>
        <div className="mixed_title">Volume</div>
        <div className="mixed_volume">
          <HiVolumeOff
            className="mixed_icon"
            onClick={() => {
              setValue(0);
              dispatch(setVolume(0));
            }}
          />
          <input
            type="range"
            id="vol"
            name="vol"
            min="0"
            max="100"
            value={value}
            className="mixed_icon"
            onChange={(e) => {
              setValue(e.target.value);
              dispatch(setVolume(value));
            }}
            style={{
              width: "15rem",
            }}
          />
          <HiVolumeUp
            className="mixed_icon"
            onClick={() => {
              setValue(100);
              dispatch(setVolume(100));
            }}
          />
        </div>
        <div className="mixed_title">Background noises</div>
        <div className="noise_wrapper">
          {noise.map((item) => {
            return <Noise item={item} />;
          })}
        </div>
      </div>
    </>
  );
}

export default Mixed;
