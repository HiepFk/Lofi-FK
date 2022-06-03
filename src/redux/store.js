import { configureStore } from "@reduxjs/toolkit";
import videoReducer from "./videoSlice";
import musicReducer from "./musicSlice";
export default configureStore({
  reducer: {
    video: videoReducer,
    music: musicReducer,
  },
});
