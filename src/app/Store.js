import { configureStore } from "@reduxjs/toolkit";
// import { setupListeners } from "@reduxjs/toolkit/dist/query";
import bugReducer from "../features/bugs/bugSlice";
import userReducer from "../features/users/userSlice";
// import { UserApi } from "../services/userAPI";

export const store = configureStore({
  reducer: {
    // [UserApi.reducerPath]: UserApi.reducer,
    bug: bugReducer,
    user: userReducer,
  },
  // middleware: (getDefaultMiddleware) => {
  //   getDefaultMiddleware().concat(UserApi.middleware);
  // },
});

// setupListeners(store.dispatch);
