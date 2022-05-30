import { configureStore } from "@reduxjs/toolkit";
import bugReducer from "../features/bugs/bugSlice";

export const store = configureStore({
  reducer: {
    bug: bugReducer,
  },
});
