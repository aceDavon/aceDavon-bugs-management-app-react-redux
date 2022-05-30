import { createSlice } from "@reduxjs/toolkit";
import { bugItems } from "../../bugItems";

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
    addBug: (state, action) => {
      const newlist = state.bug;
      const completeList = {
        ...action.payload,
        id: ++initialId,
        resolved: false,
      };
      newlist.push(completeList);
    },
    resolveBug: (state, action) => {
      const unresolved = state.bug.find(
        (resolve) => resolve.id === action.payload
      );

      unresolved.resolved = !unresolved.resolved;
    },
    removeBug: (state, action) => {
      let stateCopy = state.bug.filter((bug) => bug.id !== action.payload);
      if (state.qty === 1) {
        state.bug = [];
      } else {
        state.bug = stateCopy;
      }
    },
    bugsQty: (state) => {
      const arr = state.bug;
      state.qty = arr.length;
    },
  },
});

export const { bugsQty, addBug, resolveBug, removeBug } = bugSlice.actions;

export default bugSlice.reducer;
