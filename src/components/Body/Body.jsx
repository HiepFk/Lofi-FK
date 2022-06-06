import React from "react";
import { useSelector } from "react-redux";

import "./body.css";

function Body() {
  const { daynight, rain, video } = useSelector((state) => state.video);
  const status = `${daynight}-${rain}`;

  return (
    <>
      <video
        className={video === 1 ? "video in" : "video out"}
        autoPlay
        loop
        muted
      >
        <source src="/assets/video/1.mp4" type="video/mp4" />
      </video>
      <video
        className={video === 2 ? "video in" : "video out"}
        autoPlay
        loop
        muted
      >
        <source src="/assets/video/2.mp4" type="video/mp4" />
      </video>

      <img
        src="/assets/video/3.gif"
        className={video === 3 ? "video in" : "video out"}
        alt=""
      />
      <img
        src="/assets/video/4.gif"
        className={video === 4 ? "video in" : "video out"}
        alt=""
      />
      <img
        src="/assets/video/5.gif"
        className={video === 5 ? "video in" : "video out"}
        alt=""
      />

      <video
        className={
          video === 0 && status === "night-clear" ? "video in" : "video out"
        }
        autoPlay
        loop
        muted
      >
        <source src="/assets/video/Night-clear.mp4" type="video/mp4" />
      </video>
      <video
        className={
          video === 0 && status === "night-rain" ? "video in" : "video out"
        }
        autoPlay
        loop
        muted
      >
        <source src="/assets/video/Night-rainny.mp4" type="video/mp4" />
      </video>
      <video
        className={
          video === 0 && status === "day-clear" ? "video in" : "video out"
        }
        autoPlay
        loop
        muted
      >
        <source src="/assets/video/Day-sunny.mp4" type="video/mp4" />
      </video>
      <video
        className={
          video === 0 && status === "day-rain" ? "video in" : "video out"
        }
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
