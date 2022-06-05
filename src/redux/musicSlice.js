import { createSlice } from "@reduxjs/toolkit";

export const musicSlice = createSlice({
  name: "music",
  initialState: {
    mode: "Sad",
    index: 0,
    status: true,
    volume: 80,
  },
  reducers: {
    setMode: (state, actions) => {
      state.mode = actions.payload;
    },
    nextSong: (state) => {
      state.index++;
    },
    prevSong: (state) => {
      state.index--;
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

export const { setMode, nextSong, prevSong, setPause, setPlay, setVolume } =
  musicSlice.actions;
export default musicSlice.reducer;
