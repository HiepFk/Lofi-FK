import React from "react";
import { FaCloudMoon, FaGuitar, FaSadTear } from "react-icons/fa";
import { IoMdCafe } from "react-icons/io";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { setMode } from "../../redux/musicSlice";
import "./app.css";
function Type() {
  const dispatch = useDispatch();
  const { mode } = useSelector((state) => state.music);
  const items = [
    {
      id: 1,
      icon: <FaCloudMoon className="type_icon" />,
      text: "Sleep",
    },
    {
      id: 2,
      icon: <FaGuitar className="type_icon" />,
      text: "Jazzy",
    },
    {
      id: 3,
      icon: <IoMdCafe className="type_icon" />,
      text: "Chill",
    },
    {
      id: 4,
      icon: <FaSadTear className="type_icon" />,
      text: "Sad",
    },
  ];
  return (
    <div className="type">
      {items.map((item) => {
        return (
          <div
            className={
              item.text === mode ? "type_wrapper active " : "type_wrapper"
            }
            key={item.id}
            onClick={() => {
              dispatch(setMode(item.text));
            }}
          >
            {item.icon}
            <div className="type_name">{item.text}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Type;
