import React from "react";
import styled from "styled-components";
import { MdZoomOutMap } from "react-icons/md";
import Toggle from "./Toggle/Toggle";

function Header() {
  return (
    <Wrapper>
      <Logo src="/assets/icons/logo.gif" alt="" />
      <IconEffect>
        <Zoom>
          <MdZoomOutMap
            style={{ color: "white", width: "2rem", height: "2rem" }}
          />
        </Zoom>
        <Toggle />
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
`;

const Zoom = styled.div`
  width: 6rem;
  height: 5rem;
  cursor: pointer;
`;

export default Header;
