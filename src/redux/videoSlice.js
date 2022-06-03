import { createSlice } from "@reduxjs/toolkit";

export const videoSlice = createSlice({
  name: "video",
  initialState: {
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
  },
});

export const { setDay, setNight, setClear, setRain } = videoSlice.actions;
export default videoSlice.reducer;
