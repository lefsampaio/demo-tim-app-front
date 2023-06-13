import { createSlice } from "@reduxjs/toolkit";

export const selectTabSlice = createSlice({
    name: "tab",
    initialState: { selected: 0 },
    reducers: {
        setSelect: (state, action) => {
            state.selected = action.payload;
        },

    }
});

export const { setSelect } = selectTabSlice.actions;
export default selectTabSlice.reducer 