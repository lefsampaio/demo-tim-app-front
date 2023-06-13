import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
    openDialog: false,
};

export const dialogSlice = createSlice({
    name: "dialog",
    initialState,
    reducers: {
        setDialogState(state, action) {
            state.openDialog = action.payload;
        },
    },
    // Special reducer for hydrating the state. Special case for next-redux-wrapper
    extraReducers: (builder) => {
        builder
            .addCase(HYDRATE, (state, action) => {
                return {
                    ...state,
                    ...action.payload.dialog,
                }
            })
    }
});

export const { setDialogState, setInput } = dialogSlice.actions;
export const selectDialogState = (state) => state.dialog.openDialog;
export default dialogSlice.reducer