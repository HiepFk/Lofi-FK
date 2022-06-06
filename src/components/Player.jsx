import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { setPlay, setPause } from "../redux/musicSlice";

function Player({ music }) {
  const dispatch = useDispatch();
  const { volume, pause } = useSelector((state) => state.music);

  const [isPlaying, setIsPlaying] = useState(pause);
  const [currentSong, setCurrentSong] = useState(0);
  const audioElement = useRef();

  const setPlaying = () => {
    setIsPlaying(!isPlaying);
  };
  useEffect(() => {
    if (isPlaying) {
      audioElement.current.play();
      dispatch(setPlay());
    } else {
      audioElement.current.pause();
      dispatch(setPause());
    }
    audioElement.current.volume = volume / 100;
  });

  const nextSong = () => {
    setCurrentSong(() => {
      let temp = currentSong;
      temp++;
      if (temp > music.length - 1) {
        temp = 0;
      }
      return temp;
    });
  };

  const prevSong = () => {
    setCurrentSong(() => {
      let temp = currentSong;
      temp--;
      if (temp < 0) {
        temp = music.length - 1;
      }
      return temp;
    });
  };

  return (
    <Wrapper>
      <audio
        src={music[currentSong].src}
        ref={audioElement}
        onEnded={nextSong}
      ></audio>
      <img src="/assets/icons/prev.svg" alt="" onClick={prevSong} />
      <div onClick={setPlaying}>
        {!isPlaying ? (
          <>
            <img src="/assets/icons/play.svg" alt="" />
          </>
        ) : (
          <>
            <img src="/assets/icons/pause.svg" alt="" />
          </>
        )}
      </div>
      <img src="/assets/icons/next.svg" alt="" onClick={nextSong} />
    </Wrapper>
  );
}
const Wrapper = styled.div`
  position: absolute;
  bottom: 0rem;
  left: 0rem;
  width: 100%;
  height: 10%;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 1rem;
  img {
    transition: all 0.3s linear;
    cursor: pointer;
    :hover {
      opacity: 0.5;
    }
  }
`;

export default Player;
