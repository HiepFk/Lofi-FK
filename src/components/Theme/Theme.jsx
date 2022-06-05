import React from "react";
import { useDispatch } from "react-redux";
import { setVideo } from "../../redux/videoSlice";
import "./app.css";
function Theme() {
  const dispatch = useDispatch();

  const setTheme = (value) => {
    dispatch(setVideo(value));
  };

  return (
    <>
      <div className="theme">
        <div className="theme_title">Choose your theme 😉 and</div>
        <div className="theme_title"> enjoy it 😊</div>
        <div className="theme_container">
          <img
            src="/assets/theme/0.png"
            alt=""
            className="theme_img"
            onClick={() => setTheme(0)}
          />
          <img
            src="/assets/theme/1.png"
            alt=""
            className="theme_img"
            onClick={() => setTheme(1)}
          />
          <img
            src="/assets/theme/2.png"
            alt=""
            className="theme_img"
            onClick={() => setTheme(2)}
          />
          <div className="theme_title">If you have any lofi loop videos</div>
          <div className="theme_title">please send them to me </div>
          <div className="theme_title">
            Thanks <span>❤❤❤</span>{" "}
          </div>
        </div>
      </div>
    </>
  );
}

export default Theme;
