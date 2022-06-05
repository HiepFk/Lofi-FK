import { createSlice } from "@reduxjs/toolkit";

export const videoSlice = createSlice({
  name: "video",
  initialState: {
    video: 0,
    daynight: "day",
    rain: "clear",
  },
  reducers: {
    setDay: (state) => {
      state.daynight = "day";
    },
    setNight: (state) => {
      state.daynight = "night";
    },
    setClear: (state) => {
      state.rain = "clear";
    },
    setRain: (state) => {
      state.rain = "rain";
    },
    setVideo: (state, actions) => {
      state.video = actions.payload;
    },
  },
});

export const { setDay, setNight, setClear, setRain, setVideo } =
  videoSlice.actions;
export default videoSlice.reducer;
