import React, { useState } from "react";
import { MdOutlineVideoSettings, MdRecordVoiceOver } from "react-icons/md";
import { FaSlidersH } from "react-icons/fa";
import Theme from "../Theme/Theme";
import Mixed from "../Mixed/Mixed";
import "./app.css";
function Setting() {
  const [hideTheme, setHideTheme] = useState(false);
  const [hideMixed, setHideMixed] = useState(false);
  const SetHideTheme = () => {
    setHideMixed(false);
    setHideTheme(!hideTheme);
  };
  const SetHideMixed = () => {
    setHideTheme(false);
    setHideMixed(!hideMixed);
  };

  return (
    <>
      <div className="warpper">
        <div className="setting">
          <div onClick={SetHideMixed}>
            <FaSlidersH className="setting_icon" />
          </div>
          <hr />
          <div onClick={SetHideTheme}>
            <MdOutlineVideoSettings className="setting_icon" />
          </div>
          <hr />
          <div>
            <MdRecordVoiceOver className="setting_icon" />
          </div>
        </div>
      </div>
      <Theme hideTheme={hideTheme} />
      <Mixed hideMixed={hideMixed} />
    </>
  );
}

export default Setting;
