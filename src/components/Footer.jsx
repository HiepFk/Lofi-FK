import React from "react";
import Player from "./Player";
import { chill, jazzy, sleep, sad } from "../data/ListSong";
import { useSelector } from "react-redux";

function Footer() {
  const { mode } = useSelector((state) => state.music);

  return (
    <>
      {mode === "Chill" && <Player music={chill} />}
      {mode === "Sleep" && <Player music={jazzy} />}
      {mode === "Jazzy" && <Player music={sleep} />}
      {mode === "Sad" && <Player music={sad} />}
    </>
  );
}

export default Footer;
