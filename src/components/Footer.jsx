import React from "react";
import Player from "./Player";
import { chill, jazzy, sleep } from "../data/ListSong";

function Footer() {
  return (
    <>
      <Player music={chill} />
    </>
  );
}

export default Footer;
