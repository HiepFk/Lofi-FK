import { createSlice } from "@reduxjs/toolkit";

export const musicSlice = createSlice({
  name: "music",
  initialState: {
    mode: "chill",
    index: 0,
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
  },
});

export const { setMode, nextSong, prevSong } = musicSlice.actions;
export default musicSlice.reducer;
