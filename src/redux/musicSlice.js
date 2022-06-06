import { createSlice } from "@reduxjs/toolkit";

export const musicSlice = createSlice({
  name: "music",
  initialState: {
    mode: "Sad",
    volume: 80,
    pause: false,
  },
  reducers: {
    setMode: (state, actions) => {
      state.mode = actions.payload;
    },
    setPause: (state) => {
      state.pause = false;
    },
    setPlay: (state) => {
      state.pause = true;
    },
    setVolume: (state, actions) => {
      state.volume = actions.payload;
    },
  },
});

export const { setMode, setPause, setPlay, setVolume } = musicSlice.actions;
export default musicSlice.reducer;
