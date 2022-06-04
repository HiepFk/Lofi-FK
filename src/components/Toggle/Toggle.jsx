import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setDay, setNight } from "../../redux/videoSlice";
import "./app.css";
function Toggle() {
  const dispatch = useDispatch();

  const [toggle, setToggle] = useState(false);
  const triggerToggle = () => {
    setToggle(!toggle);
    if (toggle) {
      dispatch(setDay());
    } else {
      dispatch(setNight());
    }
  };

  return (
    <div
      onClick={triggerToggle}
      className={`wrg-toggle ${toggle ? "wrg-toggle--checked" : ""}`}
    >
      <div className="wrg-toggle-container">
        <div className="wrg-toggle-check">
          <span>🌜</span>
        </div>
        <div className="wrg-toggle-uncheck">
          <span>🌞</span>
        </div>
      </div>
      <div className="wrg-toggle-circle"></div>
      <input
        className="wrg-toggle-input"
        type="checkbox"
        aria-label="Toggle Button"
      />
    </div>
  );
}

export default Toggle;
