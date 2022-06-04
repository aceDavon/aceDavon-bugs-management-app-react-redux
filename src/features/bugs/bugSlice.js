import { createSlice } from "@reduxjs/toolkit";
import { bugItems } from "../../bugItems";
import { useSelector } from "react-redux";

let initialId = 0;
let qty;
const initialState = {
  bug: bugItems,
  qty,
};

const bugSlice = createSlice({
  name: "bug",
  initialState,
  reducers: {
    addBug: {
      reducer(state, action) {
        const newlist = state.bug;
        const completeList = {
          ...action.payload,
          id: ++initialId,
          resolved: false,
        };
        newlist.push(completeList);
      },
      prepare(title, description, userId, date) {
        return {
          payload: {
            title,
            description,
            userId,
            date: new Date().toISOString(),
          },
        };
      },
    },
    resolveBug: (state, action) => {
      const unresolved = state.bug.find(
        (resolve) => resolve.id === action.payload
      );

      unresolved.resolved = !unresolved.resolved;
    },
    removeBug: (state, action) => {
      let stateCopy = state.bug.filter((bug) => bug.id !== action.payload);

      state.qty === 1 ? (state.bug = []) : (state.bug = stateCopy);
    },
    bugsQty: (state) => {
      const arr = state.bug;
      state.qty = arr.length;
    },
  },
  extraReducers: (builder) => {
    // builder
    //   .addCase(FetchUsers.pending, (state, action) => {
    //     state.status = "loading";
    //   })
    //   .addCase(FetchUsers.fulfilled, (state, action) => {
    //     let user_id = {};
    //     action.payload.forEach((user) => {
    //       user_id[user.id] = user;
    //     });
    //     state.entities = user_id;
    //     state.status = "idle";
    //   });
  },
});

export const { bugsQty, addBug, resolveBug, removeBug } = bugSlice.actions;

export const selectAllBugs = (state) => state.bug;

export default bugSlice.reducer;
