import { createSlice } from "@reduxjs/toolkit";

export const musicSlice = createSlice({
  name: "music",
  initialState: {
    mode: "chill",
    index: 0,
    status: true,
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
  },
});

export const { setMode, nextSong, prevSong, setPause, setPlay } =
  musicSlice.actions;
export default musicSlice.reducer;
