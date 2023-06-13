import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  openState: true,
};
export const openSlice = createSlice({
  name: "open",
  initialState,
  reducers: {
    setOpenState(state, action) {
      state.openState = action.payload;
    },
  },
  // Special reducer for hydrating the state. Special case for next-redux-wrapper
  extraReducers: (builder) => {
    builder
      .addCase(HYDRATE, (state, action) => {
        return {
          ...state,
          ...action.payload.open,
        }
      })
  }
});

export const { setOpenState } = openSlice.actions;
export const selectOpenState = (state) => state.open.openState;

export default openSlice.reducer 