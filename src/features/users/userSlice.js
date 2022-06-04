import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { sub } from "date-fns";

const initialState = {
  users: [],
  authUser: [],
  isloggedIn: false,
  status: "idle",
  error: "",
};

const baseUrl = "https://fakestoreapi.com/users";

export const fetchUsers = createAsyncThunk("users/fetch", async () => {
  try {
    const response = await axios.get(baseUrl);
    return [...response.data];
  } catch (error) {
    return error.message;
  }
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signIn: (state, action) => {
      state.authUser = action.payload;
      state.isloggedIn = !state.isloggedIn;
    },
  },

  extraReducers(builder) {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = "pending";
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = "successful";
        let min = 1;
        const fetchedData = action.payload.map((post) => {
          post.date = sub(new Date(), { minutes: min++ }).toISOString;
          return post;
        });

        state.users = state.users.concat(fetchedData);
      });
  },
});

export const { signIn } = userSlice.actions;

export const selectAllUsers = (state) => state.user;

export default userSlice.reducer;
