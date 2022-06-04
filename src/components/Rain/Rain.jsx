import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { BsCloudLightningRainFill } from "react-icons/bs";
import { setClear, setRain } from "../../redux/videoSlice";

import "./app.css";
function Rain() {
  const dispatch = useDispatch();

  const [isRain, setIsRain] = useState(true);
  const SetRain = () => {
    setIsRain(!isRain);
    if (isRain) {
      dispatch(setRain());
    } else {
      dispatch(setClear());
    }
  };
  return (
    <div className="wrapper">
      <BsCloudLightningRainFill className="icon" onClick={SetRain} />
    </div>
  );
}

export default Rain;
