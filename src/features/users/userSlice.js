import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: [],
  isloggedIn: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signIn: (state, action) => {
      let user = state.user;
      user.push(action.payload);
      state.isloggedIn = !state.isloggedIn;
    },
  },
});

export const { signIn } = userSlice.actions;

export const selectAllUsers = (state) => state.user;

export default userSlice.reducer;
