import { configureStore } from "@reduxjs/toolkit";
import videoReducer from "./videoSlice";
// import postReducer from "./postSlice";
export default configureStore({
  reducer: {
    video: videoReducer,
    // post: postReducer,
  },
});
