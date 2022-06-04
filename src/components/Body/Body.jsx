import React from "react";
import { useSelector } from "react-redux";

import "./body.css";

function Body() {
  const { daynight, rain } = useSelector((state) => state.video);

  const status = `${daynight}-${rain}`;
  return (
    <>
      <video
        className={status === "night-clear" ? "videoIn" : "videoOut"}
        autoPlay
        loop
        muted
      >
        <source src="/assets/video/Night-clear.mp4" type="video/mp4" />
      </video>
      <video
        className={status === "night-rain" ? "videoIn" : "videoOut"}
        autoPlay
        loop
        muted
      >
        <source src="/assets/video/Night-rainny.mp4" type="video/mp4" />
      </video>
      {/* Day */}
      <video
        className={status === "day-clear" ? "videoIn" : "videoOut"}
        autoPlay
        loop
        muted
      >
        <source src="/assets/video/Day-sunny.mp4" type="video/mp4" />
      </video>
      <video
        className={status === "day-rain" ? "videoIn" : "videoOut"}
        autoPlay
        loop
        muted
      >
        <source src="/assets/video/Day-rainny.mp4" type="video/mp4" />
      </video>
    </>
  );
}

export default Body;
