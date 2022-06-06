import React from "react";
import { useDispatch } from "react-redux";
import { setVideo } from "../../redux/videoSlice";
import "./app.css";
function Theme({ hideTheme }) {
  const dispatch = useDispatch();

  const setTheme = (value) => {
    dispatch(setVideo(value));
  };
  const items = [0, 1, 2, 3, 4, 5];

  return (
    <>
      <div className={hideTheme ? "theme" : "theme hidden"}>
        <div className="theme_title">Choose your theme 😉 and</div>
        <div className="theme_title"> enjoy it 😊</div>
        <div className="theme_container">
          {items.map((item) => {
            return (
              <img
                src={`/assets/theme/${item}.png`}
                alt=""
                className="theme_img"
                onClick={() => setTheme(item)}
                key={item}
              />
            );
          })}

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
