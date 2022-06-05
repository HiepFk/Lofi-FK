import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import { MdZoomOutMap } from "react-icons/md";
import Toggle from "./Toggle/Toggle";
import Rain from "./Rain/Rain";
import Setting from "./Setting/Setting";

function Header() {
  const { video } = useSelector((state) => state.video);

  const setFullScreen = (e) => {
    e.stopPropagation();
    const html = document.querySelector("html");
    const isFullScreen = document.fullscreenElement;
    if (isFullScreen === null) {
      html.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };
  return (
    <Wrapper>
      <Logo src="/assets/icons/logo.gif" alt="" />
      <IconEffect>
        <Zoom onClick={setFullScreen}>
          <MdZoomOutMap
            style={{
              color: "white",
              width: "2rem",
              height: "2rem",
              marginRight: "2rem",
              cursor: "pointer",
            }}
          />
        </Zoom>
        {video === 0 && (
          <>
            <Toggle
              style={{
                marginRight: "2rem",
              }}
            />
            <Rain />
          </>
        )}
        <Setting />
      </IconEffect>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 10%;
  z-index: 10;
  background-image: linear-gradient(180deg, rgba(66, 65, 65, 0.8), transparent);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  padding-bottom: 1rem;
`;
const Logo = styled.img`
  width: 13rem;
  height: 7rem;
`;
const IconEffect = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3rem;
`;

const Zoom = styled.div`
  :hover {
    opacity: 0.5;
    transition: all 0.25s linear;
  }
`;

export default Header;
