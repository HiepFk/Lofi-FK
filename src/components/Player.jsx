import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

function Player({ music }) {
  const { volume } = useSelector((state) => state.music);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(0);
  const audioElement = useRef();

  const setPlaying = () => {
    setIsPlaying(!isPlaying);
  };
  useEffect(() => {
    if (isPlaying) {
      audioElement.current.play();
    } else {
      audioElement.current.pause();
    }
  });

  useEffect(() => {
    if (audioElement.current.ended) {
      nextSong();
    }
    audioElement.current.volume = volume / 100;
    // eslint-disable-next-line no-use-before-define
  }, [volume]);

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
      <audio loop src={music[currentSong].src} ref={audioElement}></audio>
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
